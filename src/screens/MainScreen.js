import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataAsync,
  addDataAsync,
  updateDataAsync,
  deleteDataAsync,
} from '../redux/reducers/dataSlice';

const MainScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchDataAsync());
  }, [dispatch]);

  const handleAdd = () => {
    const newData = { /* Your data here */ };
    dispatch(addDataAsync(newData));
  };

  const handleUpdate = (id) => {
    const updatedData = { /* Your updated data here */ };
    dispatch(updateDataAsync(id, updatedData));
  };

  const handleDelete = (id) => {
    dispatch(deleteDataAsync(id));
  };

  return (
    <View>
      <Text>Data:</Text>
      {data.map(item => (
        <View key={item.id}>
          <Text>{/* Display your data here */}</Text>
          <Button onPress={() => handleUpdate(item.id)} title="Update" />
          <Button onPress={() => handleDelete(item.id)} title="Delete" />
        </View>
      ))}
      <Button onPress={handleAdd} title="Add Data" />
    </View>
  );
};

export default MainScreen;
