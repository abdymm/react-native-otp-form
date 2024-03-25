import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import OTP from "./Otp"
import { useState } from "react"

export default function App() {
  const [otp, setOtp] = useState("")
  const onSubmitOTP = () => {
    alert(otp)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Input your OTP</Text>
      <OTP
        codeCount={6}
        containerStyle={{ marginTop: 50 }}
        otpStyles={{ backgroundColor: "#fff", borderRadius: 100 }}
        onFinish={(code) => setOtp(code)}
      />
      <TouchableOpacity style={styles.submitOtpButton} onPress={onSubmitOTP}>
        <Text style={styles.submitOtpButtonText}>Submit</Text>
      </TouchableOpacity>
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
  submitOtpButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitOtpButtonText: {
    color: "#fff",
  },
})
