import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

export default function Cards() {
  return (
    <View style={styles.cardViewContainer}>
      <Text style={styles.cardTextContainer}>MEUS CARDS</Text>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" color="#fff" style={styles.avatarContainer} />}
        right={(props) => (
          <IconButton {...props} icon="plus" color="#000" size={32} style={styles.buttonContainer} onPress={() => {}} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardViewContainer: {
    alignItems: "center",
    top: -150,
  },
  cardTextContainer: {
    color: "#fff",
  },
  buttonContainer:{
    backgroundColor:'yellow',
  },
  avatarContainer:{
    backgroundColor:'#000',

  }
});
