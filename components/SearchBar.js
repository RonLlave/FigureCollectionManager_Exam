import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import AddFigureForm from "./AddFigureForm";
const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Filter Item"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <AddFigureForm />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 5,
    height: 40,
    width: 500,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    padding: 8,
    marginBottom: 10,
    height: 60,
    alignItems: "center",
  },
});

export default SearchBar;
