import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOutEffect } from "../../../store/effects/auth/auth.effects";

const MePage = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logOutEffect());
  };
  return (
    <Button
      type="button"
      style={{
        padding: "5px 30px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "8px",
      }}
      onClick={() => {
        handleSubmit();
      }}
    >
      Log out
    </Button>
  );
};
export default MePage;
