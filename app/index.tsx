import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the start of my finance app</Text>
      <Pressable onPress={() => {
          console.log("Pressed");
        }}>
        <Text>Click me</Text>
      </Pressable>
    </View>
  );
}
