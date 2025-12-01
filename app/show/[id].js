import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function ShowDetails() {
  const { id } = useLocalSearchParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((err) => console.log("Erro:", err));
  }, [id]);

  if (!show) return <Text>Carregando...</Text>;

  return (
    <ScrollView style={styles.container}>
      {show.image && (
        <Image source={{ uri: show.image.original }} style={styles.banner} />
      )}

      <Text style={styles.title}>{show.name}</Text>

      <Text style={styles.subtitle}>Gêneros:</Text>
      <Text style={styles.text}>{show.genres.join(", ")}</Text>

      <Text style={styles.subtitle}>Resumo:</Text>
      <Text style={styles.text}>
        {show.summary.replace(/<[^>]+>/g, "")}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  banner: { width: "100%", height: 300, borderRadius: 10 },
  title: { fontSize: 28, fontWeight: "bold", marginVertical: 10 },
  subtitle: { fontSize: 20, fontWeight: "bold", marginTop: 20 },
  text: { fontSize: 16, marginTop: 4, lineHeight: 22 },
});
