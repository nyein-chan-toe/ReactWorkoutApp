import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useContext} from 'react';
import themeContext from '../theme/themeContext';
import {Colors} from '../theme/color';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Splash() {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={{backgroundColor: theme.background, flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />

      <View style={{flex: 2.5, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/image/Title.png')}
          resizeMode="stretch"
          style={{
            alignSelf: 'center',
            height: height / 7,
            width: width - 40,
          }}
        />
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={50} color={Colors.btn} />
      </View>
    </SafeAreaView>
  );
}
