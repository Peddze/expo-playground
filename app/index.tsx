import { Pressable, StyleSheet, Text, View } from "react-native";

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
  }
})

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>This is the start of my finance app</Text>
      <Pressable style={styles.button} onPress={() => {
          console.log("Pressed");
        }}>
        <Text style={styles.buttonText}>Click me</Text>
      </Pressable>
    </View>
  )
}
