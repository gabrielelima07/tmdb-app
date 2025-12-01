import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function CarouselNetflix({ title, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image
              source={{ uri: item.image?.medium || item.image?.original }}
              style={styles.poster}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 12,
    marginBottom: 8,
  },
  card: {
    width: 140,
    height: 200,
    marginHorizontal: 8,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#333",
  },
  poster: {
    width: "100%",
    height: "100%",
  },
});
