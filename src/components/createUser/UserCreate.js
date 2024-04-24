import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../store/userSlice";
import UserForm from "../Form/UserForm";

const UserCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    dispatch(addUser(formData));
    navigate("/");
  };

  return (
    <div>
      <UserForm
        initialValues={{ username: "", email: "", role: "user" }}
        buttonText="Create User"
        onSubmit={handleSubmit}
        heading="Create New User"
      />
    </div>
  );
};

export default UserCreate;
