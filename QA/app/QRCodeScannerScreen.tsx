import React from "react";
import { View } from "react-native";
import QRCodeScanner from "../components/QRCodeScanner";

const QRCodeScannerScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <QRCodeScanner />
    </View>
  );
};

export default QRCodeScannerScreen;
