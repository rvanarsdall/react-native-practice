import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItems = (props) => {
  const itemData = props.itemData;
  return (
    <Pressable onPress={}>
      <View style={styles.goalContainer} key={itemData + Math.random()}>
        <Text style={styles.goalText}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItems;
const styles = StyleSheet.create({
  goalContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: { color: "white", fontWeight: "700" },
});
