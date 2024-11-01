"use client";

import { useAuth } from "@/contexts/AuthContext";
import IsLoggedIn from "./IsLoggedIn";
import IsNotLoggedIn from "./IsNotLoggedIn";

const UserActions = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  return <>{!user ? <IsNotLoggedIn /> : <IsLoggedIn />}</>;
};
export default UserActions;
