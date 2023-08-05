import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goal, setGoal] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setGoal((currentGoals) => [...currentGoals, enteredGoal]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goals"
          style={styles.border}
          onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView>
          {goal.map((goal, index) => (
            <View style={styles.goalContainer} key={index}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: { flex: 5, marginTop: 24 },
  border: {
    borderWidth: 5,
    borderColor: "red",
  },
  goalContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: { color: "white", fontWeight: "700" },
});
