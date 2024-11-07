import { useUserAuth } from "@/contexts/UserAuthContext";
import IsLoggedIn from "./IsLoggedIn";
import IsNotLoggedIn from "./IsNotLoggedIn";

const UserActions = () => {
  const { user, isLoading } = useUserAuth();

  if (isLoading) return <p>Loading...</p>;

  return <>{!user ? <IsNotLoggedIn /> : <IsLoggedIn />}</>;
};
export default UserActions;
