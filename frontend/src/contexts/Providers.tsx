import { LoadingProvider } from "@/contexts/LoadingContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AxiosProvider } from "@/contexts/AxiosContext";
import { UserAuthProvider } from "@/contexts/UserAuthContext";
import { ValuerAuthProvider } from "@/contexts/ValuerAuthContext";
import { AdminAuthProvider } from "./AdminAuthContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadingProvider>
      <ToastProvider>
        <AxiosProvider>
          <AdminAuthProvider>
            <ValuerAuthProvider>
              <UserAuthProvider>{children}</UserAuthProvider>
            </ValuerAuthProvider>
          </AdminAuthProvider>
        </AxiosProvider>
      </ToastProvider>
    </LoadingProvider>
  );
};

export default Providers;
