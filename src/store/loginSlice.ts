import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { validateEmail, validatePhone } from '../common/utils/validators';



export interface LoginState {
  email: {
    val: string;
    err: string;
  };
  username: {
    val: string;
    err: string;
  };

  phone: {
    val: string;
    err: string;
  };

  address: {
    val: string;
    err: string;
  }

}

const initialState: LoginState = {
  email: {
    val: "",
    err: ""
  },
  username: {
    val: "",
    err: ""
  },
  phone: {
    val: "",
    err: ""
  },
  address: {
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
    setAddress: (state, action: PayloadAction<string>) => {
      state.address.val = action.payload
      state.address.err = action.payload.length < 1 ? "address is required": ""
    },
    setPhone: (state, action: PayloadAction<string>) => {
        state.phone.val = action.payload
        state.phone.err = !validatePhone(action.payload) ? "phone must be a valid number": ""
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setUsername, setEmail, setPhone, setAddress } = loginSlice.actions

export default loginSlice.reducer

