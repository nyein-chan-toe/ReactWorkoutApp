import {View, TouchableOpacity, Dimensions, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../theme/theme';
import React, {useState} from 'react';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Slides from '../Slides';
import style from '../theme/style';

const width = Dimensions.get('screen').width;

export default function Introduction() {
  const ref = React.useRef(null);
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const Footer = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: theme.background,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 18,
            backgroundColor: theme.background,
            marginBottom: 20,
          }}>
          {currentSlideIndex === 0 ? (
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={goNextSlide}>
                <Avatar.Icon
                  icon="chevron-right"
                  size={50}
                  style={{backgroundColor: '#FE970F'}}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('FinalOnBoarding')}
                style={{marginLeft: 10}}>
                <Text style={[style.txt, {color: '#BDBDBD'}]}>Skip</Text>
              </TouchableOpacity>
            </View>
          ) : currentSlideIndex === 1 ? (
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={goNextSlide}>
                <Avatar.Icon
                  icon="chevron-right"
                  size={50}
                  style={{backgroundColor: '#FE970F'}}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('FinalOnBoarding')}
                style={{marginLeft: 10}}>
                <Text style={[style.txt, {color: '#BDBDBD'}]}>Skip</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FinalOnBoarding')}>
                <Avatar.Icon
                  icon="chevron-right"
                  size={50}
                  style={{backgroundColor: '#FE970F'}}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('FinalOnBoarding')}
                style={{marginLeft: 10}}>
                <Text style={[style.txt, {color: '#BDBDBD'}]}>Skip</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: theme.background,
            marginBottom: 20,
          }}>
          {Slides.map((_, index) => (
            <View
              key={index}
              style={[
                style.indicator,
                currentSlideIndex === index && {
                  borderColor: 'white',
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  marginHorizontal: 5,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== Slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Footer />
    </SafeAreaView>
  );
}
