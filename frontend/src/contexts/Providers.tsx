import { AuthProvider } from "@/contexts/AuthContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AxiosProvider } from "@/contexts/AxiosContext";
import { LoadingProvider } from "@/contexts/LoadingContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadingProvider>
      <ToastProvider>
        <AxiosProvider>
          <AuthProvider>{children}</AuthProvider>
        </AxiosProvider>
      </ToastProvider>
    </LoadingProvider>
  );
};

export default Providers;
