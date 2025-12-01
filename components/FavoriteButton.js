import { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { addFavorite, removeFavorite, isFavorite } from "../storage/favorites";

export default function FavoriteButton({ show }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    isFavorite(show.id).then(setFav);
  }, []);

  const toggle = async () => {
    if (fav) {
      await removeFavorite(show.id);
    } else {
      await addFavorite(show);
    }
    setFav(!fav);
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={toggle}>
      <Text style={styles.txt}>
        {fav ? "❤️ Remover dos Favoritos" : "🤍 Favoritar"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginVertical: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#222",
  },
  txt: { color: "#fff", textAlign: "center", fontSize: 16 },
});
