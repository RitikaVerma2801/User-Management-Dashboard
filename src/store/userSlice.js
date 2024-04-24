import { createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  { id: 1, username: "john_doe", email: "john@example.com", role: "user" },
  { id: 2, username: "jane_doe", email: "jane@example.com", role: "admin" },
];

let userIdCounter = initialUsers.length + 1;

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: initialUsers,
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = { ...action.payload, id: userIdCounter };
      state.users.push(newUser);
      userIdCounter++;
    },
    updateUser: (state, action) => {
      const { id, username, email, role } = action.payload;
      const user = state.users.find((u) => u.id === id);
      if (user) {
        user.username = username;
        user.email = email;
        user.role = role;
      }
    },
    deleteUser: (state, action) => {
      const index = state.users.findIndex((u) => u.id === action.payload);
      if (index >= 0) {
        state.users.splice(index, 1);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
