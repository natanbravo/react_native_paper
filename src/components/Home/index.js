import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import Cards from "../Cards";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.titleContainer}>Bravo Codes</Text>
      <Text style={styles.textContainer}>
        A website designed to document my evolution as a software developer
      </Text>
      <Button
        icon={"camera"}
        mode={"contained"}
        color={"#fff000"}
        style={styles.buttonContainer}
      >
        Subscribe
      </Button>

      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: -220,
    color: "#000",
  },
  textContainer: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "monospace",
    margin: 15,
    marginVertical: 230,
    color: "#222",
  },
  buttonContainer: {
    top: -200,
  },
});
