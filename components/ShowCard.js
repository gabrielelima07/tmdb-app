import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ShowCard({ item, width = 140, height = 200 }) {
  return (
    <TouchableOpacity style={[styles.card, { width }]}>
      <Image
        source={{ uri: item.image?.medium || item.image?.original }}
        style={[styles.image, { width: "100%", height }]}
      />

      <Text style={styles.title} numberOfLines={2}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
  },
  image: {
    borderRadius: 12,
    backgroundColor: "#222",
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});
