import React, { useEffect, useState } from 'react';
import {
  View, SafeAreaView, FlatList, Alert
} from 'react-native';
import Styles from './Home.styles';
import Cell from '../../components/Cell/Cell';
import Search from '../../components/Search/Search';
import { getAllReps } from '../../util/Persist';

const Home = (props) => {
  const [listRepositories, setListRep] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const allReps = () => {
    getAllReps().then((list) => {
      setListRep(list);
    }).catch((error) => {
      Alert.alert('Erro', error);
    });
  };
  useEffect(async () => {
    allReps();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    allReps();
  };
  const renderFlatListItem = ({ item }) => {
    const { avatar, organizacao, nome } = item;
    return (
      <Cell
        urlImageAvatar={avatar}
        title={organizacao}
        subtitle={nome}
        onPress={() => props.navigation.navigate('Detail')}
        roundAvatar={false}
      />
    );
  };

  const flatListKeyExtractor = (item) => toString(item.id);
  const renderFlatList = (repList) => (
    <FlatList
      data={repList}
      renderItem={renderFlatListItem}
      keyExtractor={flatListKeyExtractor}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );

  return (
    <SafeAreaView style={Styles.safeArea}>
      <Search />
      <View style={Styles.mainContainer}>
        {renderFlatList(listRepositories, () => props.navigation.navigate('Detail'))}
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = { title: 'GitIssues' };
export default Home;
