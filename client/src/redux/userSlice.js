import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// get user register
export const userRegister= createAsyncThunk("user/register", async(user)=>{
try{
  let response = await axios.post("http://localhost:5000/user/register",user);
  return await response.data
}
catch(error){
  console.error(error);
}})
;


// get user login 
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});
// get current user
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user:null,
  status:null,
  
  }


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    
  },
  extraReducers:{
    // user register
    [userRegister.pending]:(state)=>{
      state.status = "pending"
      
    },
    [userRegister.fulfilled]:(state,action)=>{
      console.log(action.payload)
      state.status = "success";
      state.user=action.payload.newUserToken;
      localStorage.setItem("token",action.payload?.token);
     
    },
    [userRegister.rejected]:(state)=>{
      state.status = "fail"
    },
    //user Login
    [userLogin.pending]: (state) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.isLoading = false;
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload?.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
      state.isLoading = false;
    },
    // current user

    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer