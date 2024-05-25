import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import style from '../theme/style';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function IntroItem({item}) {
  return (
    <SafeAreaView style={{width: width}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{flex: 2}}>
        <Image source={item.bg} style={{width: width, height: height / 1.4}} />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#1F4690',
          paddingHorizontal: 18,
          paddingTop: 15,
          borderTopRightRadius: 50,
        }}>
        <Text style={[style.title]}>{item.title1}</Text>
        <Text style={[style.title]}>{item.title2}</Text>
        <View style={{paddingTop: 15}}>
          <Text style={[style.txt]}>{item.subtitle}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
