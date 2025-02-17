import React, { useContext, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
} from "react-native";
import { FigureContext } from "../context/FigureContext";
import SearchBar from "../components/SearchBar";
import EditFigureForm from "../components/EditFigureForm";
import { Button } from "react-native-web";

const HomeScreen = () => {
  const { figures, deleteFigure } = useContext(FigureContext);
  const [searchFilter, setSearchFilter] = useState("");
  const animatedValues = useRef(new Map()).current;

  const filteredFigures = figures.filter((fig) =>
    fig.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  useEffect(() => {
    // Initialize animated values for each figure
    filteredFigures.forEach((figure) => {
      if (!animatedValues.has(figure.id)) {
        animatedValues.set(figure.id, new Animated.Value(0));
      }
    });
  }, [filteredFigures]);

  const animateIn = (id) => {
    const animatedValue = animatedValues.get(id);
    if (animatedValue) {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const animateOut = (id, callback) => {
    const animatedValue = animatedValues.get(id);
    if (animatedValue) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        animatedValues.delete(id);
        callback();
      });
    }
  };

  const handleDelete = (id) => {
    animateOut(id, () => deleteFigure(id));
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchFilter} onChangeText={setSearchFilter} />
      <FlatList
        data={filteredFigures}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const animatedValue = animatedValues.get(item.id);

          if (animatedValue) {
            animateIn(item.id);
          }

          return (
            <Animated.View
              style={[styles.figureItem, { opacity: animatedValue }]}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <EditFigureForm figure={item} />
              <Button
                onPress={() => handleDelete(item.id)}
                title="DELETE"
                style={styles.buttonDelete}
                color="red"
              ></Button>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, width: 700 },
  figureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: { width: 50, height: 50, marginRight: 16 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: "bold" },
  price: { fontSize: 14, color: "gray" },
  buttonDelete: {
    backgroundColor: "Red",
    borderRadius: 10,
    color: "white",
    marginLeft: 5,
  },
});

export default HomeScreen;
