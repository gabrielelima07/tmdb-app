import { Slot } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="root"
        options={{ title: "Home" }}
      >
        {() => <Slot />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

