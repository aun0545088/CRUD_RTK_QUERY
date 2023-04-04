import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAddUserMutation, useGetUsersQuery } from "../Api/users/usersApi";

const UserForm = () => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [addUser] = useAddUserMutation();
  const { refetch } = useGetUsersQuery();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    await addUser(data).unwrap();
    refetch();
    handleClose();
    reset();
  };

  return (
    <>
      <div className="modal">
        <Button
          onClick={handleClickOpen}
          startIcon={<AddCircleIcon sx={{ color: "warning !important" }} />}
          className="addButton"
          variant="outlined"
          sx={{ marginTop: "50px", borderRadius: "20px" }}
        >
          Add User Data
        </Button>

        <Dialog open={open} onClose={handleClose} className="dialog">
          <DialogTitle className="dialogTitle">Add User Data</DialogTitle>
          <DialogContent className="dialogContent">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                required
                label="ID"
                variant="outlined"
                placeholder="Enter ID"
                className="textfield"
                {...register("id")}
              />
              <TextField
                fullWidth
                required
                label="Name"
                variant="outlined"
                placeholder="Enter Name"
                className="textfield"
                {...register("name")}
              />
              <TextField
                fullWidth
                required
                label="Username"
                variant="outlined"
                placeholder="Enter Username"
                className="textfield"
                {...register("username")}
              />
              <TextField
                fullWidth
                required
                label="Email"
                variant="outlined"
                placeholder="Enter Email"
                className="textfield"
                {...register("email")}
              />
              <TextField
                fullWidth
                required
                label="Phone"
                variant="outlined"
                placeholder="Enter Phone"
                className="textfield"
                {...register("phone")}
              />
              <TextField
                fullWidth
                required
                label="Website"
                variant="outlined"
                placeholder="Enter Website"
                className="textfield"
                {...register("website")}
              />
              <div className="submitButton">
                <Button type="submit" variant="contained" className="button">
                  Submit
                </Button>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className="cancelButton">
              <Cancel sx={{ color: "red" }} />
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default UserForm;
