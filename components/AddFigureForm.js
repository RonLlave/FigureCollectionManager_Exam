import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { FigureContext } from "../context/FigureContext";

const AddFigureForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const { addFigure } = useContext(FigureContext);

  const handleAdd = () => {
    addFigure({ name, price: parseFloat(price), image: imageAddress });
    setName("");
    setPrice("");
    setImageAddress("");
    setModalVisible(false);
  };
  const handleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Button
        title="Add Item"
        onPress={handleModal}
        style={styles.buttonStyle}
      />
      <Modal
        animationType="none"
        visible={isModalVisible}
        onRequestClose={handleModal}
        transparent={true}
        style={styles.modalContainer}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
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
            <TextInput
              placeholder="Image Address"
              value={imageAddress}
              onChangeText={setImageAddress}
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <Button
                title="Add Figure"
                onPress={handleAdd}
                style={styles.buttonStyle}
              />
              <Button
                title="Close"
                onPress={handleModal}
                style={styles.buttonStyle}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 250, // Set custom width
    height: 200, // Set custom height
    justifyContent: "center", // Center content vertically inside the modal
  },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 8 },
  buttonStyle: {
    margin: 10,
  },
  buttonContainer: { display: "flex", flexDirection: "row" },
});

export default AddFigureForm;
