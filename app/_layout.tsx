import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MissionProvider } from "../context/MissionContext";

export default function RootLayout() {
  return (
    <MissionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#050816",
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#050816",
          },
        }}
      />

      <StatusBar style="light" />
    </MissionProvider>
  );
}