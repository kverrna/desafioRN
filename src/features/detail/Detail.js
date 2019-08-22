import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Detail = (props) => {
  useEffect(() => {
    const titulo = props.navigation.getParam('titulo');
    Detail.navigationOptions = { title: t };
  }, []);
  const t = props.navigation.getParam('titulo');
  return (
    <SafeAreaView>
      <View>
        <Text>{t}</Text>
      </View>
    </SafeAreaView>
  );
};


export default Detail;
