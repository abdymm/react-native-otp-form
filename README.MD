# `react-native-otp-form`
![npm](https://img.shields.io/npm/v/react-native-otp-form.svg) ![Supports Android, iOS, and Web](https://img.shields.io/badge/platforms-android%20|%20ios%20|%20web-lightgrey.svg) ![MIT License](https://img.shields.io/npm/l/react-native-otp-form.svg)

React Native component for OTP Input Form

![Alt text](https://i.ibb.co/ZT0K91h/Simulator-Screen-Shot-i-Phone-12-Pro-Max-2021-03-14-at-07-35-42.png=100x)
![Alt text](https://i.ibb.co/FVm2NRK/Simulator-Screen-Shot-i-Phone-12-Pro-Max-2021-03-14-at-08-47-28.png=100x)
![Alt text](https://i.ibb.co/S7qpKPp/Simulator-Screen-Shot-i-Phone-12-Pro-Max-2021-03-14-at-08-47-32.png=100x)


## Getting started

`yarn add react-native-otp-form`
or
`npm install react-native-otp-form --save`

## Usage

### Example

```javascript
import {OTP} from 'react-native-otp-form';
```

```javascript
  <OTP
        codeCount={6}
        containerStyle={{marginTop: 50}}
        otpStyles={{backgroundColor: '#eee'}}
    />
```

Check out the [example project](https://github.com/abdymm/react-native-otp-form/tree/master/Example) for more examples.

### Props

* [Inherited `View` props...](https://github.com/facebook/react-native-website/blob/master/docs/view.md#props)


| Type       | Required | Description |
| ---------- | -------- | ---
| codeCount | Yes       | How many otp box/character|
| containerStyle | No       | Styles for container `View`|
| otpStyle | No       | Styles for each box `TextInput`|
| onTyping | No       | Callback to get otp when user typing|
| onFinish | No       | Callback to get otp value when user finish filled all boxes|

# Running the Example app 
While developing, you can run the example app to test your changes.

## Setup

- Clone the repository 
- Go to Example folder
- Run `yarn install`

## Start the app

- Run `yarn android` to run on Android
- Run `yarn ios` to run on iOS

## TODO

- XXXX
- XXXX

## License
The library is released under the MIT licence. For more information see `LICENSE`.