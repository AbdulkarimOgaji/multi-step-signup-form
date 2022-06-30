import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { validateEmail, validatePassword, validatePhone } from '../common/utils/validators';



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

  password: {
    val: string;
    err: string;
  }

  passwordConf: {
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
  },
  password: {
    val: "",
    err: "",
  },
  passwordConf: {
    val: "",
    err: "",
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username.val = action.payload
      state.username.err = action.payload.length < 2 ? "username must be at least 2 characters long": ""
    },
    setEmail: (state, action: PayloadAction<string>) => {
        state.email.val = action.payload
        state.email.err = !validateEmail(action.payload) ? "email must be a valid address": ""
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address.val = action.payload
      state.address.err = action.payload.length < 1 ? "country is required": ""
    },
    setPhone: (state, action: PayloadAction<string>) => {
        state.phone.val = action.payload
        state.phone.err = !validatePhone(action.payload) ? "phone must be a valid number": ""
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password.val = action.payload
      state.password.err = validatePassword(action.payload)
    },

    setPasswordConf: (state, action: PayloadAction<string>) => {
      state.passwordConf.val = action.payload
      state.passwordConf.err = state.password.val === action.payload ? "" : "passwords do not match"
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { setUsername, setEmail, setPhone, setAddress, setPassword, setPasswordConf } = loginSlice.actions

export default loginSlice.reducer

