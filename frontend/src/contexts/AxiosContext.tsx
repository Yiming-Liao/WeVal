"use client";

import { useToast } from "@/contexts/ToastContext";
import { createContext, useContext, ReactNode, FC } from "react";
import Axios, { AxiosInstance, AxiosResponse, isAxiosError } from "axios";
import { useLoading } from "./LoadingContext";
import { appConfig } from "@/config/appConfig";

const AxiosContext = createContext<AxiosInstance | undefined>(undefined);

export const AxiosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const { setIsLoading } = useLoading();

  const axios: AxiosInstance = Axios.create({
    baseURL: appConfig.API_URL, // "http://localhost:3333/api/v1"
    withCredentials: true,
  });

  // 請求攔截器  添加 token 到 headers
  axios.interceptors.request.use(
    (config) => {
      setIsLoading(true);

      // 檢查 baseURL，若為 localhost 則改為 127.0.0.1
      if (config.baseURL && config.baseURL.includes("localhost")) {
        config.baseURL = config.baseURL.replace("localhost", "127.0.0.1");
      }

      return config;
    },
    (error) => {
      setIsLoading(false);
      console.warn("[Axios 請求攔截器] 錯誤: ", error);
    }
  );

  // 回應攔截器
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      toast({ type: "success", message: response.data.message }); // 使用 toast 顯示成功訊息
      setIsLoading(false);
      return response;
    },
    (error: unknown) => {
      setIsLoading(false);

      if (isAxiosError(error)) {
        console.log(error);
        if (error.response && error.response.data.errors) {
          error.response.data.errors.forEach(
            (adonisError: { message: string }) => {
              toast({ type: "error", message: adonisError.message }); // 使用 toast 顯示錯誤訊息
            }
          );
        } else {
          toast({ type: "error", message: "伺服器回應錯誤或無法處理請求" }); // 使用 toast 顯示錯誤訊息
        }
      } else {
        console.warn("發生未知錯誤: ", error);
      }
    }
  );

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};
