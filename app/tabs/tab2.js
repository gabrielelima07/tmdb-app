import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tab2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aba 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },
  text: { color: "#fff", fontSize: 20 },
});
