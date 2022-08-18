import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { useSelector } from "react-redux";
  import { deleteTask } from "../redux/taskSlice";
  import { useDispatch } from "react-redux";
  
  const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);
   
    
    const onDelete = (id) => {
      dispatch(
        deleteTask({
          id: id,
        })
      );
    };
  
    //renderItem function with a delete button
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => onDelete(item.id)}
          >
            <MaterialIcons name="done" size={25} color="green" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => onDelete(item.id)}
          >
            <MaterialIcons name="edit" size={25} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(item.id)}
          >
            <MaterialIcons name="delete" size={25} color="red" />
          </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    return (
      <View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  
  export default TodoList;
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#e9e9e9",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
    },
    
  });