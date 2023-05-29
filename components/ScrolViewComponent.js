import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const ScrolViewCompo = () => {
  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: 'pink',
          marginHorizontal: 20,
        }}
        disableIntervalMomentum={false}
        // disableScrollViewPanResponder={true}
        snapToInterval={false}
        endFillColor="green"
        decelerationRate="fast">
        <Text style={{fontSize: 24}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          fermentum imperdiet magna at tristique. Cras lobortis urna ut tellus
          fermentum, id feugiat turpis euismod. Maecenas quis vestibulum risus.
          Etiam eget augue nibh. Vivamus vitae commodo ante. Pellentesque odio
          arcu, vulputate at tortor et, euismod lacinia leo. Integer dictum
          viverra nibh, in mollis velit porttitor sit amet. Aliquam faucibus,
          elit facilisis feugiat congue, lectus tellus scelerisque tellus, a
          venenatis risus massa vitae velit. Curabitur at pharetra sapien. Proin
          vitae velit ut felis bibendum aliquet eget a nibh. Mauris posuere
          aliquam orci a vehicula. Proin vitae interdum sapien. Aliquam dapibus
          dignissim tellus, ut maximus ligula. Etiam ullamcorper mi ante, a
          porttitor magna vulputate et. Integer molestie quam et hendrerit
          consectetur. Aenean aliquam ultricies odio. Donec finibus lorem ut
          elit aliquam maximus. Aliquam eu tellus id metus elementum eleifend
          vel vitae lorem. Nunc efficitur arcu erat. Sed egestas urna nulla, a
          consequat nibh lacinia eget. Cras aliquam metus quis sem pellentesque,
          ac tristique nunc laoreet. Vestibulum metus nibh, lobortis vitae ex
          id, tincidunt imperdiet mi. Vivamus mollis sapien arcu, sed aliquet
          purus sagittis sit amet. Pellentesque iaculis, nunc sit amet rutrum
          mattis, metus enim facilisis est, et tincidunt dolor erat eu elit.
          Pellentesque id pulvinar justo, quis molestie elit. Sed sit amet erat
          lobortis, pharetra libero a, finibus magna. In mauris erat, interdum
          ac sem ut, viverra luctus sem. Suspendisse in mauris nec ligula porta
          scelerisque at non dui. Nullam efficitur imperdiet ex in dictum. Cras
          volutpat varius dui at venenatis. Duis sed venenatis augue, eu sodales
          lacus. Morbi ultrices cursus quam, vel luctus augue semper eget.
          Praesent nec diam non orci porta luctus ac in ligula. In maximus eros
          quis felis feugiat lacinia. Suspendisse potenti. Morbi bibendum
          scelerisque magna, sit amet vulputate ex. Nunc augue diam, congue quis
          pellentesque vel, efficitur id nisl. Suspendisse quis libero a elit
          ultrices consequat sed ac nisl. Curabitur id ipsum malesuada, suscipit
          magna sed, sagittis ex. In enim dolor, vehicula quis luctus vitae,
          imperdiet quis nibh. Cras elementum tempus arcu, sed tristique dui
          sodales vel. Donec pellentesque libero ex, sed vehicula felis egestas
          quis. Quisque non magna dictum, gravida ligula vitae, tristique enim.
          Proin fermentum eget ex vel efficitur. Cras maximus purus non bibendum
          scelerisque. Maecenas vehicula consequat magna vitae ultrices.
          Maecenas laoreet elit nec purus tempus, vitae sagittis diam
          sollicitudin. Aenean ultrices vitae nisi vitae pharetra. Sed commodo
          dapibus finibus. In efficitur, elit ac euismod semper, nibh mi
          condimentum risus, sed tincidunt turpis magna sed arcu. Vestibulum
          consectetur eros massa, ut sodales elit finibus in. Morbi scelerisque
          tortor id ligula porta, in porttitor sem luctus. Proin sem sem,
          ultricies eget mi egestas, sodales varius dolor. Nam vitae lacus mi.
          Etiam vel consequat mauris. Praesent pretium mi non lacus accumsan,
          sed feugiat neque pulvinar. Aenean facilisis ipsum risus, elementum
          euismod quam fringilla id.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ScrolViewCompo;
