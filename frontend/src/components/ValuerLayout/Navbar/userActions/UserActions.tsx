// [r: Valuer]

import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import IsLoggedIn from "./IsLoggedIn";
import IsNotLoggedIn from "./IsNotLoggedIn";

const UserActions = () => {
  const { valuer, isLoading } = useValuerAuth();

  if (isLoading) return <p>Loading...</p>;

  return <>{!valuer ? <IsNotLoggedIn /> : <IsLoggedIn />}</>;
};
export default UserActions;
