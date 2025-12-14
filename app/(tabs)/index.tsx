import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function RoleSelection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.push("/login")}>
        <Text style={styles.btnText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.disabled}><Text>Teacher</Text></TouchableOpacity>
      <TouchableOpacity style={styles.disabled}><Text>Administrative Staff</Text></TouchableOpacity>
      <TouchableOpacity style={styles.disabled}><Text>Admin</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 30, backgroundColor: "#F8FAFF" },
  title: { fontSize: 24, fontWeight: "700", textAlign: "center", marginBottom: 30, color: "#4A74E0" },
  btn: { backgroundColor: "#4A74E0", padding: 15, borderRadius: 10, marginBottom: 15 },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "700" },
  disabled: { backgroundColor: "#E0E7FF", padding: 15, borderRadius: 10, marginBottom: 15, alignItems: "center" }
});
