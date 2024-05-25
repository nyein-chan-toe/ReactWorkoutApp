import {Text, View, SafeAreaView} from 'react-native';
import React, {useState, useContext} from 'react';
import themeContext from '../theme/themeContext';

export default function Splash() {
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={{backgroundColor: theme.background, flex: 1}}>
      <View>
        <Text>Splash Screen</Text>
      </View>
    </SafeAreaView>
  );
}
