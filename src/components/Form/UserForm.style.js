import styled from "styled-components";

const UserFormContainer = styled.div`
  padding: 80px;

  .heading {
    text-align: center;
    padding: 10px 5px;
    font-size: 25px;
  }

  .user-form {
    background-color: white;
    padding: 35px 40px;
    border-radius: 8px;
    margin: 0 auto;
    max-width: 450px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 95%;
    padding: 10px;
    border: solid 1px grey;
    border-radius: 3px;
    background-color: whitesmoke;
  }

  select{
    width: 100% !important;
  }

  .error {
    color: red;
    font-size: 14px;
  }

  .button {
    background-color: #8b002b;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
  }
`;

export default UserFormContainer;
