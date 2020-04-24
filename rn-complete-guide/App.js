import React, {useState} from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoaIItem from "./components/GoaIItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isActiveMode, setIsActiveMode] = useState(false);
  console.log("App -> isActiveMode", isActiveMode)

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return
    }
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle },
      ]);

    setIsActiveMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentCourse => {
      return currentCourse.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionalHandler = () => {
    setIsActiveMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsActiveMode(true)} />
      <GoalInput
        visible={isActiveMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <GoaIItem
            onDelete={removeGoalHandler}
            id={itemData.item.id}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
