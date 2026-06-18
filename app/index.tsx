import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    width: "50%",
  }
})

export default function Index() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems([...items, text]);
    setText("");
  }

  return (
    <View style={styles.container}>
      <Text>This is the start of my finance app</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Pressable style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <Text>Items: {items.length}</Text>
    </View>
  )
}
