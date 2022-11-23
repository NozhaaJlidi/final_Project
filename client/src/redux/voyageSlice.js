import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// add new voyage 
export const newVoyage= createAsyncThunk("voyage/add", async(voyage)=>{
try{
  let response = await axios.post("http://localhost:5000/voyage/add",voyage);
  return await response.data
}
catch(error){
  console.error(error);
}})
;
// get all voyages
export const getAllVoyages = createAsyncThunk("voyage/all", async () => {
  try {
    let response = await axios.get("http://localhost:5000/voyage/all");
    return await response.data
  } catch (error) {
    console.log(error);
  }
});
//get voyage by id
export const getVoyageById = createAsyncThunk("voyage/:id", async (id) => {
    try {
      let response = await axios.get(`http://localhost:5000/voyage/${id}`);
      return await response.data
    } catch (error) {
      console.log(error);
    }
  });
// get voyage by filtred 
export const getVoyageByFilter = createAsyncThunk("voyage/bytype", async (text) => {
    try {
      let response = await axios.get("http://localhost:5000/voyage/bytype" ,text)
      return await response.data
       
      ;
    } catch (error) {
      console.log(error);
    }
  });
// update voyage 
export const updateVoyage = createAsyncThunk("voyage/update", async (id,voyage) => {
    try {
      let response = await axios.put(`http://localhost:5000/voyage/update/${id}` ,)
      return await response.data
       
      ;
    } catch (error) {
      console.log(error);
    }
  });
// delete voyage 

export const deleteVoyage = createAsyncThunk("voyage/delete", async (id) => {
    try {
      let response = await axios.delete(`http://localhost:5000/voyage/delete/${id}` ,)
      return await response.data
       
      ;
    } catch (error) {
      console.log(error);
    }
  });




const initialState = {
  voyage:null,
  status:null,
  voyages:null,
  // voyages permet de retouner plusieurs voyages 
  }


export const voyageSlice = createSlice({
  name: 'voyage',
  initialState,
  reducers: {
    
  },
  extraReducers:{
    // add voyage
    [newVoyage.pending]:(state)=>{
      state.status = "pending"
      
    },
    [newVoyage.fulfilled]:(state,action)=>{
      
      state.status = "success";
      state.voyage=action.payload.voyage;
      //payloadvoyage le vouage c'est la varibale retourner dans le postman    
    },
    [newVoyage.rejected]:(state)=>{
      state.status = "fail"
    },
    //get all voyage
    [getAllVoyages.pending]: (state) => {
      state.status = "pending";
    
    },
    [getAllVoyages.fulfilled]: (state, action) => {
      state.status = "success";
      state.voyages = action.payload?.allVoyage
    },
    [getAllVoyages.rejected]: (state) => {
      state.status = "fail";
    },
    
   // voyage by id 
   [getVoyageById.pending]: (state) => {
    state.status = "pending";
  
  },
  [getVoyageById.fulfilled]: (state, action) => {
    state.status = "success";
    state.voyage = action.payload.idVoyage;
  },
  [getVoyageById.rejected]: (state) => {
    state.status = "fail";
  },
//get voyage by filtred 

[getVoyageByFilter.pending]: (state) => {
    state.status = "pending";
  
  },
  [getVoyageByFilter.fulfilled]: (state, action) => {
    state.status = "success";
    state.voyages = action.payload.filtredVoyage;
  },
  [getVoyageByFilter.rejected]: (state) => {
    state.status = "fail";
  },
///update voyage 
[updateVoyage.pending]: (state) => {
    state.status = "pending";
  
  },
  [updateVoyage.fulfilled]: (state, action) => {
    state.status = "success";
    state.voyage = action.payload.updatedVoyage;
  },
  [updateVoyage.rejected]: (state) => {
    state.status = "fail";
  },

// delete voyage 

[deleteVoyage.pending]: (state) => {
    state.status = "pending";
  
  },
  [deleteVoyage.fulfilled]: (state, action) => {
    state.status = "success";
    state.voyage = action.payload.voyage;
  },
  [deleteVoyage.rejected]: (state) => {
    state.status = "fail";
  },
  }
})

// Action creators are generated for each case reducer function

export default voyageSlice.reducer