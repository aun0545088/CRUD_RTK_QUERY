import React, { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { PacmanLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useDeleteUserMutation, useGetUsersQuery } from "../Api/users/usersApi";

const DeleteData = ({ cell }) => {
  const id = cell.row.original.id;
  const [deleteUser] = useDeleteUserMutation();
  const { refetch } = useGetUsersQuery();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteUser(id);
      setTimeout(() => {
        refetch();
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        onClick={handleDelete}
        color="error"
        sx={{ position: "relative" }}
      >
        {loading ? (
          <div>
            <PacmanLoader size={12} color={"#36d7b7"} loading={loading} />
          </div>
        ) : (
          <DeleteIcon />
        )}
      </Button>
    </div>
  );
};

export default DeleteData;
