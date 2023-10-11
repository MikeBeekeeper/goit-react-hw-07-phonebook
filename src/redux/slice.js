import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNewContact, deleteContact, fetchAllContacts } from 'helpers/FetchApi';


export const getAllContacts = createAsyncThunk('contacts/getAllContacts',
async()=> {
  return await fetchAllContacts()
})

export const addNewContact = createAsyncThunk('contacts/addNewContact', 
async(user)=> {
  return await createNewContact(user)
})

export const removeContact = createAsyncThunk('contacts/removeContact',
async(id)=> {
  return await deleteContact(id)
})

const handlePending = (state) => {
state.isLoading = true
}

const handleReject = (state, {error}) => {
  state.isLoading = false
  state.error = error.message
}

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items:[],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllContacts.fulfilled, (state, action)=>{
      state.isLoading = false
      state.items = action.payload
    })
    .addCase(addNewContact.fulfilled, (state, action)=>{
      state.isLoading = false
      state.items.push(action.payload)
    })
    .addCase(removeContact.fulfilled, (state)=>{
      state.isLoading = false
    })
    .addMatcher((action)=>action.type.endsWith('/pending'), handlePending)
    .addMatcher((action)=>action.type.endsWith('/rejected'), handleReject)
  }
});
export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return state = action.payload;
    },
  },
});

export const { changeFilter } = myFilterSlice.actions;
