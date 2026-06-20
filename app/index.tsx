import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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
  },
  billItem: {
    alignItems: "center",
    gap: 8,
    marginVertical: 8,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
})

type BillItem = {
  id: number;
  name: string;
  amount: number;
};

export default function Index() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<BillItem[]>([]);
  const [billAmount, setBillAmount] = useState("");

  const addItem = () => {
    const bill = {
      id: Date.now(),
      name: text,
      amount: Number(billAmount),
    };
    setItems([...items, bill]);
    setText("");
    setBillAmount("");
  };
  
  const removeBill = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text>This is the start of my finance app</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} placeholder="Name" />
      <TextInput style={styles.input} onChangeText={setBillAmount} value={billAmount} placeholder="Amount" keyboardType="decimal-pad" />
      <Pressable style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
      <Text>Items: {items.length}</Text>
      <Text>Total: £{total.toFixed(2)}</Text>
      <FlatList 
        data={items} 
        renderItem={({ item }) => (
          <View style={styles.billItem}>
            <Text>{item.name}: £{item.amount.toFixed(2)}</Text>
            <Pressable style={styles.removeButton} onPress={() => removeBill(item.id)}>
              <Text style={styles.buttonText}>Remove</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} 
      />
    </View>
  )
}
