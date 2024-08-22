import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Open QR Code Scanner"
        onPress={() => router.push("/QRCodeScannerScreen")}
      />
      <Button
        title="Open QR Code Generator"
        onPress={() => router.push("/QRCodeGeneratorScreen")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  button: {
    marginTop: 16,
  },
});
