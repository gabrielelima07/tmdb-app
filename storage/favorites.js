import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "@favorites";

export async function getFavorites() {
  const json = await AsyncStorage.getItem(KEY);
  return json ? JSON.parse(json) : [];
}

export async function addFavorite(show) {
  const favs = await getFavorites();
  const updated = [...favs, show];
  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
}

export async function removeFavorite(id) {
  const favs = await getFavorites();
  const updated = favs.filter((s) => s.id !== id);
  await AsyncStorage.setItem(KEY, JSON.stringify(updated));
}

export async function isFavorite(id) {
  const favs = await getFavorites();
  return favs.some((s) => s.id === id);
}
