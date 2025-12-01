import { ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import CarouselNetflix from "../components/CarouselNetflix";

export default function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setShows(data.slice(0, 50)));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <CarouselNetflix title="Populares" data={shows.slice(0, 15)} />
      <CarouselNetflix title="Aclamados" data={shows.slice(15, 30)} />
      <CarouselNetflix title="Novidades" data={shows.slice(30, 45)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
