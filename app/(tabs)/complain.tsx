import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

export default function Complain() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState<any[]>([]);

  const submit = () => {
    if (!message) return;
    push(ref(db, "studentQueries"), {
      message,
      time: Date.now()
    });
    setMessage("");
  };

useEffect(() => {
  const qRef = ref(db, "studentQueries");

  onValue(qRef, (snap) => {
    const data: any[] = [];

    snap.forEach((child) => {
      data.push({
        id: child.key,
        ...child.val()
      });
    });

    setList(data.reverse());
  });
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complain</Text>

      <TextInput
        style={styles.input}
        placeholder="Write your complain..."
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.btn} onPress={submit}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F8FAFF" },
  title: { fontSize: 20, fontWeight: "700", color: "#4A74E0", marginBottom: 10 },
  input: { backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 10 },
  btn: { backgroundColor: "#4A74E0", padding: 14, borderRadius: 10, marginBottom: 15 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "700" },
  card: { backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 8 }
});
