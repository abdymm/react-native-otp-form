import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import OTP from "react-native-otp-form"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Input your OTP</Text>
      <OTP
        codeCount={6}
        containerStyle={{ marginTop: 50 }}
        otpStyles={{ backgroundColor: "#fff", borderRadius: 100 }}
        onFinish={(code) => alert(`Submit the OTP ${code}`)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
