import React from "react";
import { View } from "react-native";
import QRCodeGenerator from "../components/QRCodeGenerator";

const QRCodeGeneratorScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <QRCodeGenerator />
    </View>
  );
};

export default QRCodeGeneratorScreen;
