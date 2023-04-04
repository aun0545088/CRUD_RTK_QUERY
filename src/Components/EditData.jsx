import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useGetUsersQuery,
} from "../Api/users/usersApi";

export default function EditData({ cell }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
    website: "",
    email: "",
  });
  const s_id = cell.row.original.id;
  const { data: singleData = {} } = useGetSingleUserQuery(s_id, {
    skip: !s_id,
  });
  const [updateUser] = useUpdateUserMutation();
  const { refetch } = useGetUsersQuery();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ id: singleData.id, user: formData })
      .unwrap()
      .then(() => {
        refetch();
        handleClose();
      });
  };

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      ...singleData,
    }));
  }, [singleData]);

  return (
    <>
      <Button onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit User Data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="id"
              variant="outlined"
              name="id"
              value={formData.id}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <TextField
              type="text"
              label="Username"
              variant="outlined"
              name="username"
              value={formData.username}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <TextField
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <TextField
              type="text"
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <TextField
              type="text"
              label="website"
              variant="outlined"
              name="website"
              value={formData.website}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
