import React from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import style from '../style/style';

const ImgExmp = () => {
  const imageList = [
    {
      id: 1,
      image: (
        <Image
          style={style.imageStyle}
          source={require('../assets/image1.jpeg')}
          // source={require('/assets/image1.jpeg')}
        />
      ),
    },
    {
      id: 2,
      image: (
        <Image
          style={style.imageStyle}
          source={require('../assets/image2.jpeg')}
        />
      ),
    },
    {
      id: 3,
      image: (
        <Image
          style={style.imageStyle}
          source={require('../assets/image3.jpeg')}
        />
      ),
    },
    {
      id: 4,
      image: (
        <Image
          style={style.imageStyle}
          source={require('../assets/image4.jpeg')}
        />
      ),
    },
    {
      id: 5,
      image: (
        <Image
          style={style.imageStyle}
          source={require('../assets/image5.jpeg')}
        />
      ),
    },
    {
      id: 6,
      image: (
        <Image
          style={style.imageStyle}
          source={require('../assets/image6.jpeg')}
        />
      ),
    },
  ];
  return (
    <View style={style.imageContainer}>
      <ImageBackground
        resizeMode="contain"
        style={style.imageBg}
        source={require('../assets/logo-og.png')}>
        <Text style={style.textImage}>Image Background</Text>
      </ImageBackground>
      {/* <Text style={[style.text, {textAlign: 'center'}]}>Image File</Text>
      <FlatList
        data={imageList}
        renderItem={({item}) => <View>{item.image}</View>}
        scrollEnabled
      /> */}
      {/* <Image
        style={style.imageStyle}
        source={require('../assets/image1.jpeg')}
      /> */}
    </View>
  );
};

export default ImgExmp;
