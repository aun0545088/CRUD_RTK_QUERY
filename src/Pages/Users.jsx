import React from "react";
import { UserTable } from "../Components/UserTable";
import UserForm from "../Components/UserForm";
import Navbar from "../Components/Navbar";

const Users = () => {
  
  return (
    <>
      <Navbar />
      <div>
        <UserTable />
        <UserForm />
      </div>
    </>
  );
};

export default Users;
