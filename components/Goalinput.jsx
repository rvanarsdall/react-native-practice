import { StylesSheet, TextInput, View, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const { goalInputHandler, addGoalHandler } = props;

  return (
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
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
