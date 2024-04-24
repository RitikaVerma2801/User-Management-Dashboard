import styled from "styled-components";

const UserDetailsContainer = styled.div`
  padding: 20px;

  h2 {
    text-align: center;
    font-size: 35px;
  }

  span {
    color: blue;
  }

  .user-details {
    background-color: white;
    padding: 20px 30px;
    border-radius: 8px;
    margin: 0 auto;
    max-width: 500px;
    font-size: 20px;
  }

  .actions {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  .link {
    text-decoration: none;
    background-color: #8b002b;
    color: #fff;
    padding: 6px 15px;
    border-radius: 5px;
    font-size: 17px;
  }
`;

export default UserDetailsContainer;
