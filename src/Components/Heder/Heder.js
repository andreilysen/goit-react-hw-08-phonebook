import React from "react";
import { useSelector } from "react-redux";
import Auth from "../Auth";
import UserMenu from "../UserMenu";
import { getIsloggedIn } from "../../redux/user/userSelector";

const Heder = () => {
  const isLoggedIn = useSelector((state) => getIsloggedIn(state));
  return <>{isLoggedIn ? <UserMenu /> : <Auth />}</>;
};

export default Heder;
