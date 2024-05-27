import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import style from '../theme/style';
import theme from '../theme/theme';
import {Colors} from '../theme/color';
import {useNavigation} from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <AppBar
        color={Colors.secondary}
        title="Sign Up"
        titleStyle={{color: 'black', fontFamily: 'Itim-Regular'}}
        centerTitle={true}
        elevation={0}
        leading={
          <TouchableOpacity onPress={() => navigation.navigate('loginemail')}>
            <Avatar.Icon
              icon="arrow-left"
              style={{backgroundColor: Colors.secondary}}
              color="black"
              size={40}
            />
          </TouchableOpacity>
        }
      />

      <View style={[style.main, {backgroundColor: theme.bg}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingTop: 30, marginBottom: 15}}>
            <Text style={[style.logintitle, {color: theme.txt}]}>
              Complete your account
            </Text>
            <Text style={[style.txt1, {textAlign: 'center'}]}>
              Lorem ipsum dolor sit amet
            </Text>
          </View>
          <View style={{flex: 1, paddingTop: 30}}>
            <Text
              style={{
                color: theme.txt,
                fontWeight: '500',
                fontFamily: 'Itim-Regular',
              }}>
              First Name
            </Text>
            <View style={{paddingTop: 10}}>
              <TextInput
                placeholder="Enter Your First name"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.txtinput, {backgroundColor: theme.bg}]}
              />
            </View>
            <View style={{paddingTop: 15}}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: '500',
                  fontFamily: 'Itim-Regular',
                }}>
                Last Name
              </Text>
              <View style={{paddingTop: 10}}>
                <TextInput
                  placeholder="Enter Your last name"
                  selectionColor={Colors.primary}
                  placeholderTextColor={Colors.disable}
                  style={[style.txtinput, {backgroundColor: theme.bg}]}
                />
              </View>
            </View>
            <View style={{paddingTop: 5}}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: '500',
                  paddingVertical: 10,
                  fontFamily: 'Itim-Regular',
                }}>
                PassWord
              </Text>
              <View
                style={[
                  style.txtinput,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                ]}>
                <TextInput
                  placeholder="Enter Your Password"
                  selectionColor={Colors.primary}
                  secureTextEntry={!isPasswordVisible}
                  placeholderTextColor={Colors.disable}
                  style={{
                    backgroundColor: theme.bg,
                    color: Colors.disable,
                    fontFamily: 'Itim-Regular',
                  }}></TextInput>
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Icon
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    color={theme.txt}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingTop: 5}}>
              <Text
                style={{
                  color: theme.txt,
                  fontWeight: '500',
                  paddingVertical: 10,
                  fontFamily: 'Itim-Regular',
                }}>
                Confirm PassWord
              </Text>
              <View
                style={[
                  style.txtinput,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                ]}>
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry={!isPassword}
                  placeholderTextColor={Colors.disable}
                  style={{color: Colors.disable, fontFamily: 'Itim-Regular'}}
                />
                <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                  <Icon
                    name={isPassword ? 'eye-off' : 'eye'}
                    color={theme.txt}
                    size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{paddingVertical: 30}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CreatAccount')}
                style={style.btn}>
                <Text style={style.btntxt}>Continue with Email</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 10,
              }}>
              <Text style={style.txt1}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('loginemail')}>
                <Text
                  style={[
                    style.txt,
                    {color: Colors.primary, fontWeight: '500'},
                  ]}>
                  {' '}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
