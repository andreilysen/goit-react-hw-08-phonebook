import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/user/userSelector";
import { logout } from "../../redux/user/userOperation";
import { Button } from "@material-ui/core";
const UserMenu = () => {
  const userName = useSelector((state) => getUserName(state));
  const dispatch = useDispatch();
  return (
    <>
      <h3>Welcome {userName}</h3>
      <Button
        onClick={() => dispatch(logout())}
        variant="outlined"
        color="primary"
        size="small"
      >
        LogOut
      </Button>
    </>
  );
};

export default UserMenu;
