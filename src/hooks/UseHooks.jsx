import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const UseHooks = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseHooks;
