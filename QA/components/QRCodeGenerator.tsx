import React from "react";
import { View, TextInput } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = React.useState<string>("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        onChangeText={setText}
        value={text}
      />
      <QRCode value={text || "https://example.com"} />
    </View>
  );
};

export default QRCodeGenerator;
