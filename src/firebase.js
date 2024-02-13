// firebase.js
import firestore from '@react-native-firebase/firestore';

export const fetchData = async () => {
  try {
    const snapshot = await firestore().collection('your_collection').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error
  }
};

export const addData = async (newData) => {
  try {
    const docRef = await firestore().collection('your_collection').add(newData);
    return { id: docRef.id, ...newData };
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};

export const updateData = async (id, updatedData) => {
  try {
    await firestore().collection('your_collection').doc(id).update(updatedData);
    return { id, ...updatedData };
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    await firestore().collection('your_collection').doc(id).delete();
    return id;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
