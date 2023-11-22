import React from 'react';
import { ImageBackground, Image, Dimensions, View, TouchableOpacity, Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { style } from '../Initial/style';

const width = Dimensions.get('screen').width;

const back = require('../../assets/back.png');
const cadeira = require('../../assets/cadeira.png');
const titulo = require('../../assets/titulo.png');


export default function Initial() {

  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity onPress={() => navigate('HomeScreen')}>
      <View>
      <ImageBackground source={back} style={style.back}>
        <Image source={cadeira} style={style.cadeira} />
        <Image source={titulo} style={style.title} />
      </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
