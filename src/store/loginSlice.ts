import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { validateEmail } from '../common/utils/validators';

export interface LoginState {
  email: {
    val: string;
    err: string;
  };
  username: {
    val: string;
    err: string;
  };

}

const initialState: LoginState = {
  email: {
    val: "",
    err: ""
  },
  username: {
    val: "",
    err: ""
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username.val = action.payload
      state.username.err = action.payload.length < 6 ? "username must be at least 6 characters long": ""
    },
    setEmail: (state, action: PayloadAction<string>) => {
        state.email.val = action.payload
        state.email.err = !validateEmail(action.payload) ? "email must be a valid address": ""
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setUsername, setEmail } = loginSlice.actions

export default loginSlice.reducer

