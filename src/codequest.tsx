import { AuthProvider } from "./auth/context/auth_provider";
import { AppRouter } from "./router/app_router";

export const Codequest = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
