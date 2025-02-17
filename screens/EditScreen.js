import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FigureContext } from '../context/FigureContext';

const EditScreen = ({ route, navigation }) => {
  const { figure } = route.params;
  const [name, setName] = useState(figure.name);
  const [price, setPrice] = useState(figure.price.toString());
  const [image, setImage] = useState(figure.image);
  const { editFigure } = useContext(FigureContext);

  const handleSave = () => {
    editFigure(figure.id, { id: figure.id, name, price: parseFloat(price), image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 },
});

export default EditScreen;