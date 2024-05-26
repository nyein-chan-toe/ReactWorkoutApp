import {useState} from 'react';
import {ImageBackground, StatusBar, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from '../theme/style';
import {Colors} from '../theme/color';
import {useNavigation} from '@react-navigation/native';

export default function FinalOnBoarding() {
  const [darkMode] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={false}
      />
      <ImageBackground
        source={
          darkMode === true
            ? require('../../assets/image/finalonboardingblack.png')
            : require('../../assets/image/finalonboarding.png')
        }
        style={{flex: 1}}>
        <View style={{flex: 1}} />
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <Text style={[style.title, {textAlign: 'center'}]}>
            We will help you to Achieve your Dream Body
          </Text>
          <View style={{paddingHorizontal: 20, marginTop: 20}}>
            <Text style={[style.txt, {textAlign: 'center', lineHeight: 25}]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <View style={{paddingVertical: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BottomNavigator')}
              style={[style.btn, {backgroundColor: Colors.btn}]}>
              <Text style={style.btntxt}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={style.txt}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={[style.txt, {color: Colors.btn}]}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
