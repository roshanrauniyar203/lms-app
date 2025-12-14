import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/dashboard");
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#999"
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30, backgroundColor: "#F8FAFF" },
  title: { fontSize: 24, fontWeight: "700", color: "#4A74E0", marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#fff", padding: 14, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: "#dce1f0" },
  btn: { backgroundColor: "#4A74E0", padding: 15, borderRadius: 10 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "700" }
});
