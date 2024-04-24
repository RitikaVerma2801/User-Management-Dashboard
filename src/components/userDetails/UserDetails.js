import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import UserDetailsContainer from "./UserDetails.style";

const UserDetails = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <UserDetailsContainer>
      <h2>User Details</h2>
      <div className="user-details">
        <p>
          ID: <span>{user.id}</span>
        </p>
        <p>
          Username:<span>{user.username}</span>
        </p>
        <p>
          Email: <span>{user.email}</span>
        </p>
        <p>
          Role: <span>{user.role}</span>
        </p>
        <div className="actions">
          <Link to={`/user/edit/${user.id}`} className="link">Edit User</Link>
          <Link to={`/`} className="link">Show User List</Link>
        </div>
      </div>
    </UserDetailsContainer>
  );
};

export default UserDetails;
