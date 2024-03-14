# `react-native-otp-form`

![npm](https://img.shields.io/npm/v/react-native-otp-form.svg) ![Supports Android, iOS, and Web](https://img.shields.io/badge/platforms-android%20|%20ios%20|%20web-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/react-native-otp-form.svg)

React Native component for OTP Input Form

## Getting started

### Yarn

`yarn add react-native-otp-form`

### NPM

`npm install react-native-otp-form --save`

## Usage

### Example

```javascript
import OTP from "react-native-otp-form"
```

```javascript
<OTP
  codeCount={6}
  containerStyle={{ marginTop: 50 }}
  otpStyles={{ backgroundColor: "#eee" }}
/>
```

Check out the [example project](https://github.com/abdymm/react-native-otp-form/tree/master/Example) for more examples.

### Props

- [Inherited `TextInput` props...](https://reactnative.dev/docs/textinput)

| Type              | Required | Description                                                 |
| ----------------- | -------- | ----------------------------------------------------------- |
| codeCount         | Yes      | How many otp box/character                                  |
| containerStyle    | No       | Styles for container `View`                                 |
| otpStyle          | No       | Styles for each of `TextInput`                              |
| onTyping          | No       | Callback to get otp when user typing                        |
| onFinish          | No       | Callback to get otp value when user finish filled all boxes |
| ...TextInputProps | No       | [TextInput Props](https://reactnative.dev/docs/textinput)   |

# Running the Example app

While developing, you can run the example app to test your changes.

## Setup

- Clone the repository
- Go to Example folder (Expo)
- Run `yarn install`

## Start the app (Example in Expo)

- Run `yarn start`

## License

The library is released under the MIT licence. For more information see `LICENSE`.
