import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HERO = {
  uri: "file:///mnt/data/fdb1a7d5-69a3-468d-87f2-834a9eb82ea1.png",
};

export default function Dashboard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Student Dashboard</Text>
        </View>

        {/* HERO */}
        <View style={styles.heroCard}>
          <Image source={HERO} style={styles.heroImage} />
          <View style={styles.heroOverlay} />

          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Hi, Welcome Back! 👋</Text>
            <Text style={styles.heroSubtitle}>
              Manage attendance, classes, notices, chat & more.
            </Text>

            <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.startText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FEED / HOME TABS (Design similarity only) */}
        <View style={styles.tabRow}>
          <Text style={[styles.tabText, styles.tabActive]}>Feed</Text>
          <Text style={styles.tabText}>Home</Text>
        </View>

        {/* ACADEMICS SECTION */}
        <Text style={styles.sectionTitle}>Academics</Text>
        <View style={styles.academicGrid}>
          {[
            { title: "Homework", icon: "📘" },
            { title: "Library", icon: "📚" },
            { title: "E-Learning", icon: "🎓" },
            { title: "Complain", icon: "💬" },
            { title: "Leave", icon: "👜" },
            { title: "Calendar", icon: "📅" },
          ].map((item) => (
            <TouchableOpacity key={item.title} style={styles.academicCard}>
              <Text style={styles.academicIcon}>{item.icon}</Text>
              <Text style={styles.academicText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* SHOW MORE BUTTON */}
        <TouchableOpacity
          style={styles.showMoreBtn}
          onPress={() => setShowMore(!showMore)}
        >
          <Text style={styles.showMoreText}>
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </Text>
        </TouchableOpacity>

        {showMore && (
          <View style={styles.hiddenBox}>
            <Text style={styles.hiddenItem}>📖 Study Materials</Text>
            <Text style={styles.hiddenItem}>🧾 Assignments</Text>
            <Text style={styles.hiddenItem}>🧪 Lab Records</Text>
          </View>
        )}

        {/* EXAMS & RESULTS */}
        <Text style={styles.sectionTitle}>Exams & Results</Text>
        <View style={styles.examBox}>
          <Text style={styles.examTitle}>📊 Mid Term Result</Text>
          <Text style={styles.examText}>Tap to view your grades</Text>
        </View>

        <View style={styles.examBox}>
          <Text style={styles.examTitle}>📝 Upcoming Exams</Text>
          <Text style={styles.examText}>3 exams scheduled this month</Text>
        </View>

        {/* NEWS & UPDATES */}
        <View style={styles.newsHead}>
          <Text style={styles.sectionTitle}>News & Updates</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.newsCard}>
          <Text style={styles.newsTag}>Notice</Text>
          <Text style={styles.newsTitle}>Notice Regarding School Holiday</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F8FAFF" },
  container: { paddingBottom: 120 },

  header: {
    paddingVertical: 15,
    backgroundColor: "#4A74E0",
  },
  headerTitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 12,
    fontSize: 20,
    fontWeight: "700",
  },

  heroCard: {
    margin: 15,
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
  },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.30)",
  },
  heroContent: { padding: 20, justifyContent: "center", height: "100%" },
  heroTitle: { fontSize: 22, fontWeight: "800", color: "#fff" },
  heroSubtitle: { color: "#eee", marginTop: 4 },
  startBtn: {
    marginTop: 12,
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  startText: {
    fontWeight: "700",
    color: "#4A74E0",
  },

  tabRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#dce1f0",
    paddingBottom: 6,
  },
  tabText: {
    marginRight: 20,
    fontSize: 16,
    color: "#666",
  },
  tabActive: {
    color: "#4A74E0",
    borderBottomWidth: 2,
    borderBottomColor: "#4A74E0",
    paddingBottom: 6,
    fontWeight: "700",
  },

  sectionTitle: {
    marginLeft: 20,
    marginTop: 18,
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  academicGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  academicCard: {
    width: "30%",
    backgroundColor: "#EAF2FF",
    marginBottom: 14,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  academicIcon: { fontSize: 28, marginBottom: 6 },
  academicText: { fontWeight: "600", fontSize: 13, color: "#4A74E0" },

  showMoreBtn: {
    alignSelf: "center",
    marginTop: 6,
    padding: 10,
  },
  showMoreText: {
    color: "#4A74E0",
    fontWeight: "700",
  },

  hiddenBox: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },
  hiddenItem: {
    fontSize: 14,
    paddingVertical: 4,
    color: "#444",
  },

  examBox: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    elevation: 2,
  },
  examTitle: { fontSize: 16, fontWeight: "700", color: "#4A74E0" },
  examText: { marginTop: 4, color: "#555" },

  newsHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  viewAll: { color: "#4A74E0", fontWeight: "700" },

  newsCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  newsTag: {
    color: "#4A74E0",
    fontWeight: "700",
    marginBottom: 4,
  },
  newsTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
});