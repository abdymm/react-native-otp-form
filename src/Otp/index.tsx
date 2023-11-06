import React, { useState, useRef, useEffect, FunctionComponent } from "react"
import {
  View,
  TextInput,
  Dimensions,
  TextInputProps,
  ViewStyle,
} from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

import styles from "./styles"

const initCodes: string[] = []
interface OtpProps extends TextInputProps {
  containerStyle?: ViewStyle
  otpStyles?: ViewStyle
  codeCount?: number
  onTyping?: (code: string) => void
  onFinish?: (code: string) => void
}

const Otp = ({
  containerStyle,
  otpStyles,
  codeCount = 4,
  onTyping,
  onFinish,
  ...props
}: OtpProps) => {
  const inputCodeRef = useRef<TextInput[]>([])
  const [codes, setCodes] = useState<string[]>(initCodes)

  useEffect(() => {
    const codes: string[] = []
    for (let i = 0; i < codeCount; i++) {
      codes.push("")
    }
    setCodes(codes)
  }, [codeCount])

  useEffect(() => {
    onTyping && onTyping(getCodes())
    const isTypeFinish = codes.every((i) => {
      return i !== ""
    })
    if (isTypeFinish && codes.length === codeCount) {
      onFinish && onFinish(getCodes())
    }
  }, [codes, onFinish, onTyping])

  const getCodes = (): string => {
    let codeString = ""
    codes.forEach((code: string) => {
      codeString += code
    })
    return codeString
  }

  const onChangeCode = (code: string, index: number): void => {
    const typedCode = code.slice(-1)
    const currentCodes = [...codes]
    currentCodes[index] = typedCode
    setCodes(currentCodes)
  }

  const onKeyPress = (
    event: React.KeyboardEvent<TextInput>,
    index: number
  ): void => {
    const key = event.nativeEvent.key
    let destIndex = index
    if (key === "Backspace") {
      destIndex = index > 0 ? index - 1 : 0
    } else {
      destIndex = index < codeCount - 1 ? index + 1 : codeCount - 1
    }
    inputCodeRef.current[destIndex]?.focus()
  }

  return (
    <View style={[styles.form, containerStyle]}>
      {codes.map((code, index) => {
        return (
          <TextInput
            key={`${index}`}
            ref={(element) => element && inputCodeRef.current.push(element)}
            style={[
              styles.input,
              otpStyles,
              { width: width / (codeCount + 2), height: height / 14 },
            ]}
            onChangeText={(text) => onChangeCode(text, index)}
            onKeyPress={(event) => onKeyPress(event, index)}
            value={code}
            {...props}
          />
        )
      })}
    </View>
  )
}

export default Otp
