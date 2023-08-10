import React, { useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItems from "./components/GoalItem";
import GoalInput from "./components/Goalinput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goal, setGoal] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setGoal((currentGoals) => [...currentGoals, enteredGoal]);
  }

  function deleteGoalHandler(goalId) {
    setGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goal}
          renderItem={(itemData) => {
            return (
              <GoalItems itemData={itemData} onDeleteItem={deleteGoalHandler} />
            );
          }}
        ></FlatList>
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
});
