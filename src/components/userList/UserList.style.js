import styled from "styled-components";

const UserListContainer = styled.div`
  padding: 20px;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    margin-top: 25px;
    text-align: center;
    min-width: 600px;
  }
  th {
    font-size: 20px;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
  }

  .heading {
    text-align: center;
    font-size: 35px;
  }

  .create-user {
    text-decoration: none;
    font-size: 17px;
    background-color: whitesmoke;
    color: black;
    padding: 6px 15px;
    border-radius: 5px;
  }

  .create-user:hover {
    background-color: black;
    color: whitesmoke;
  }

  .action {
    font-size: 18px;
  }

  .link {
    text-decoration: none;
    color: #0707d2;
  }

  .button {
    background-color: #8b002b;
    color: #fff;
    padding: 6px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 17px;
  }

  .page-btn {
    margin: 20px 20px 0px 0px;
    padding: 2px 8px;
    color: white;
    background-color: grey;
    border-radius: 3px;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .modal p {
    margin-bottom: 20px;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: space-between;
  }
  
  .modal-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal-buttons button:first-child {
    background-color: #8b002b;
    color: #fff;
  }
  
  .modal-buttons button:last-child {
    background-color: #4caf50;
    color: white;
  }

  .msg {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-style: italic;
    font-size: 20px;
    color: brown;
  }

  @media screen and (max-width: 768px) {
    .heading {
      font-size: 28px;
    }
    .create-user {
      font-size: 14px;
      padding: 5px 10px;
    }
    .action {
      font-size: 16px;
    }
    .button {
      font-size: 14px;
      padding: 5px 10px;
    }
    .page-btn {
      margin: 10px 10px 0px 0px;
      padding: 2px 6px;
    }
    .msg {
      font-size: 16px;
    }
  }
`;

export default UserListContainer;
