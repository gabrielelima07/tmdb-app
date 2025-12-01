import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: "#111" },
        headerTintColor: "#fff",
        drawerStyle: { backgroundColor: "#000" },
        drawerActiveTintColor: "red",
        drawerInactiveTintColor: "#aaa",
      }}
    >
      <Drawer.Screen
        name="home"
        options={{ title: "Início" }}
      />

      <Drawer.Screen
        name="search"
        options={{ title: "Buscar Séries" }}
      />

      <Drawer.Screen
        name="favorites"
        options={{ title: "Meus Favoritos" }}
      />

      <Drawer.Screen
        name="modal"
        options={{ title: "Informações" }}
      />
    </Drawer>
  );
}
