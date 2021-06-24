import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/images/squigglepig_cell.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4bccc4",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 318,
    height: 301,
  },
});
