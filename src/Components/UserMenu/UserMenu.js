import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/user/userSelector";
import { logout } from "../../redux/user/userOperation";
const UserMenu = () => {
  const userName = useSelector((state) => getUserName(state));
  const dispatch = useDispatch();
  return (
    <>
      <p>Welcome {userName}</p>
      <button onClick={() => dispatch(logout())}>LogOut</button>
    </>
  );
};

export default UserMenu;
