import React from "react";
import { View } from "react-native";
import QRCodeScanner from "./components/QRCodeScanner";
import QRCodeGenerator from "./components/QRCodeGenerator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <QRCodeScanner />
      {/* OR */}
      <QRCodeGenerator />
    </View>
  );
}
