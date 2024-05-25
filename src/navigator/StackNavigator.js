import {StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {EventRegister} from 'react-native-event-listeners';
import {Colors} from '../theme/color';
import themeContext from '../theme/themeContext';
import theme from '../theme/theme';
import Splash from '../screens/Splash';
import Introduction from '../screens/introduction';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [darkMode, setDarkMode] = useState(false);
  // const toggleSwitch = () => setDarkMode(previousState => !previousState);

  // useEffect(() => {
  //   const listener = EventRegister.addEventListener('ChangeTheme', data => {
  //     setDarkMode(data);
  //     console.log(data);
  //   });

  //   return () => {
  //     EventRegister.removeAllListeners(listener);
  //   };
  // }, [darkMode]);

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <StatusBar
          backgroundColor={darkMode === true ? Colors.active : Colors.secondary}
          barStyle={darkMode === true ? 'light-content' : 'dark-content'}
          translucent={false}
        />
        <Stack.Navigator>
          {showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
          ) : null}
          <Stack.Screen
            name="Introduction"
            component={Introduction}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
