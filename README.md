# React Native Turkiye Animated Button

Animated button in React Native. It can be used to get many buttons from a single button.

```sh
npm i @react-native-turkiye/animated-button
```

or

```sh
yarn add @react-native-turkiye/animated-button
```

You can use the animated-buttons in your app.
All props are optional

```sh
  <AnimatedButton
    mainButtonColor="blue" // default value red
    iconColor="yellow" // default value white
    right={30} // default value 24
    bottom={30} // default value 24
    buttonList={[
      {
        text: 'Button 1', // default value empty
        backgroundColor: '#9b59b6', // default value red
        icon: <Icon />,
        textContainerStyle: { backgroundColor: '#fff' },
        onPress: () => console.log('1'),
      },
      {
        text: 'Button 2',
        onPress: () => console.log('2'),
      }
    ]}
  />
```

<img src="https://github.com/react-native-turkiye/animated-button/blob/main/spin.gif?raw=true" width="320">
<img src="https://github.com/react-native-turkiye/animated-button/blob/main/non-spin.gif?raw=true" width="320">