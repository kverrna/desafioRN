import React from 'react';
import {
  View, Text, SafeAreaView, Button
} from 'react-native';
import Styles from './Home.styles';
import Cell from '../../components/Cell/Cell';


const Home = (props) => {
  const d = 'ddd';
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.mainContainer}>
        <Cell />
        <Button title="navegar " onPress={() => props.navigation.navigate('Detail', { titulo: 'xxxx' })} />
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = { title: 'GitIssues' };
export default Home;
