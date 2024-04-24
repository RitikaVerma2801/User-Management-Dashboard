import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../store/userSlice';
import UserListContainer from './UserList.style';


const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const pageSize = 10;

  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const currentPageUsers = users.slice(startIdx, startIdx + pageSize);

  const handleDelete = (id) => {
    setUserIdToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteUser(userIdToDelete));
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <UserListContainer>
      <h2 className='heading'>Users List</h2>
      <Link to="/user/create" className='create-user'>Create New User</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPageUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className='action'>
                <Link to={`/user/${user.id}`} className='link'>View</Link>
                {' | '}
                <Link to={`/user/edit/${user.id}`} className='link'>Edit</Link>
                {' | '}
                <button onClick={() => handleDelete(user.id)} className='button'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            disabled={i + 1 === currentPage}
            onClick={() => setCurrentPage(i + 1)}
            className='page-btn'
          >
            {i + 1}
          </button>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to delete this user?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete}>Yes, delete it</button>
              <button onClick={cancelDelete}>No, keep it</button>
            </div>
          </div>
        </div>
      )}

      <div className='msg'>
        * For more than 10 users, Pagination gets activated 
      </div>
    </UserListContainer>
  );
};

export default UserList;
