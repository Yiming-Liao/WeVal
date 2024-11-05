"use client";

import { useUserAuth } from "@/contexts/UserAuthContext";
import { useValuerAuth } from "@/contexts/ValuerAuthContext";
import IsLoggedIn from "./IsLoggedIn";
import IsNotLoggedIn from "./IsNotLoggedIn";

const UserActions = () => {
  const { user, isLoading: isUserLoading } = useUserAuth();
  const { valuer, isLoading: isValuerLoading } = useValuerAuth();

  if (isUserLoading || isValuerLoading) return <p>Loading...</p>;

  return (
    <>
      {!user && !valuer ? (
        <IsNotLoggedIn />
      ) : (
        <IsLoggedIn role={user ? "user" : valuer ? "valuer" : ""} />
      )}
    </>
  );
};
export default UserActions;
