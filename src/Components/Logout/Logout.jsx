import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";
import React from 'react';

const Logout = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Logout;