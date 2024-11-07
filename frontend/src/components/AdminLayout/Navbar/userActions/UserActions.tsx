// [r: Admin]

import IsLoggedIn from "./IsLoggedIn";
import IsNotLoggedIn from "./IsNotLoggedIn";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

const UserActions = () => {
  const { admin, isLoading } = useAdminAuth();

  if (isLoading) return <p>Loading...</p>;

  return <>{!admin ? <IsNotLoggedIn /> : <IsLoggedIn />}</>;
};
export default UserActions;
