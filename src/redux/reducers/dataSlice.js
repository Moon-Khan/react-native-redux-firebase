import { createSlice } from '@reduxjs/toolkit';
import { fetchData, addData, updateData, deleteData } from '../../firebase';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    setData: (state, action) => action.payload,
    addData: (state, action) => [...state, action.payload],
    updateData: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteData: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { setData, addData, updateData, deleteData } = dataSlice.actions;

export const fetchDataAsync = () => async (dispatch) => {
  try {
    const data = await fetchData();
    dispatch(setData(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const addDataAsync = (newData) => async (dispatch) => {
  try {
    const data = await addData(newData);
    dispatch(addData(data));
  } catch (error) {
    console.error('Error adding data:', error);
  }
};

export const updateDataAsync = (id, updatedData) => async (dispatch) => {
  try {
    const data = await updateData(id, updatedData);
    dispatch(updateData(data));
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

export const deleteDataAsync = (id) => async (dispatch) => {
  try {
    await deleteData(id);
    dispatch(deleteData(id));
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

export default dataSlice.reducer;
