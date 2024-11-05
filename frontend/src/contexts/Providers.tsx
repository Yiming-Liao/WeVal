import { UserAuthProvider } from "@/contexts/UserAuthContext";
import { ValuerAuthProvider } from "@/contexts/ValuerAuthContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { AxiosProvider } from "@/contexts/AxiosContext";
import { LoadingProvider } from "@/contexts/LoadingContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LoadingProvider>
      <ToastProvider>
        <AxiosProvider>
          <UserAuthProvider>
            <ValuerAuthProvider>{children}</ValuerAuthProvider>
          </UserAuthProvider>
        </AxiosProvider>
      </ToastProvider>
    </LoadingProvider>
  );
};

export default Providers;
