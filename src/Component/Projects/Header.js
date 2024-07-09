import React from "react";
import LoggedInUser from "./LoggedInUser";
import Page from "./Pages";
import { useUser } from "./UserContext";

const Header = () => {
  const user = useUser()
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

export default Header