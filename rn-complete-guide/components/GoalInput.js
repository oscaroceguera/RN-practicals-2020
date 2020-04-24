import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enterGoal);
    setEnterGoal('')
  }
  
  const cancelHandler = () => {
    props.onCancel()
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          {/* <Button title="ADD" onPress={() => props.onAddGoal(enterGoal)} /> */}
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
