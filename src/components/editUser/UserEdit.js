import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../../store/userSlice";
import UserForm from "../Form/UserForm";

const UserEdit = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  const handleSubmit = (formData) => {
    dispatch(updateUser({ id: parseInt(id), ...formData }));
    navigate(`/user/${id}`);
  };

  return (
    <div>
      {user && (
        <UserForm
          initialValues={user}
          buttonText="Update User"
          onSubmit={handleSubmit}
          heading="Edit User"
        />
      )}
    </div>
  );
};

export default UserEdit;
