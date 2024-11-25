"use client";

import { create } from "zustand";
import Axios, { AxiosInstance, AxiosResponse, isAxiosError } from "axios";
import { envConfig } from "@/config/envConfig";
import toast from "react-hot-toast";

// Create store
export const useAxiosStore = create<AxiosStore>(() => {
  const axios: AxiosInstance = Axios.create({
    baseURL: envConfig.API_URL, // "http://127.0.0.1:3333/api/v1"
    withCredentials: true,
  });

  // 📡 Request interceptor
  axios.interceptors.request.use(
    (config) => config,
    (error) => console.warn("[Axios Request]: ", error)
  );

  // 📡 Response interceptor
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data.message) {
        toast.success(response.data.message, {
          position: "bottom-left",
          duration: 4000,
        });
      }
      return response;
    },
    (error: unknown) => {
      console.warn(error);

      if (isAxiosError(error)) {
        // Has error messages
        if (error.response && error.response.data.errors) {
          error.response.data.errors.forEach(
            (adonisError: { message: string }) => {
              toast.error(adonisError.message, {
                position: "bottom-left",
                duration: 4000,
              });
            }
          );
          // Has no error messages
        } else {
          toast.error("No response from server. Please try again.", {
            position: "bottom-left",
            duration: 4000,
          });
        }
        // Non-Axios error
      } else {
        toast.error("An unexpected error occurred.", {
          position: "bottom-left",
          duration: 4000,
        });
      }
    }
  );

  return { axios };
});

// Store type
type AxiosStore = {
  axios: AxiosInstance;
};
