import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' 

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
      <View style={styles.listIttem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listIttem: {
    padding: 10,
    marginTop: 15,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;