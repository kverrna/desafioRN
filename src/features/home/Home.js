import React, { useState } from 'react';
import {
  View, SafeAreaView, Button
} from 'react-native';
import Styles from './Home.styles';
import Cell from '../../components/Cell/Cell';


const Home = (props) => {
  const d = 'ddd';

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.mainContainer}>
        <Cell urlImageAvatar="https://avatars3.githubusercontent.com/u/69631?v=4" title="titulo" subtitle="subtitulo" onPress={() => props.navigation.navigate('Detail', { titulo: 'foi' })} />
        <Button title="navegar " onPress={() => props.navigation.navigate('Detail', { titulo: 'xxxx' })} />
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = { title: 'GitIssues' };
export default Home;
