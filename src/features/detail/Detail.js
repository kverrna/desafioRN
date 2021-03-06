import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Detail.style';
import Issues from '../../components/IssuesList/IssueList';
import { findIssues } from '../../services/Github.service';


const Detail = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const { organizacao, repositorioNome } = props.navigation.getParam('respositorio');
    findIssues(organizacao, repositorioNome).then((l) => {
      setList(l);
    }).catch((e) => {
      Alert.alert('Erro', `Erro ao tentar exibir lista de issues ${e}`);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Issues listIssues={list} />
      </View>
    </SafeAreaView>
  );
};

Detail.navigationOptions = ({ navigation }) => {
  const { state } = navigation;
  const { params } = state;
  const titleHeader = params.respositorio.organizacao;

  return ({ title: titleHeader });
};
export default withNavigation(Detail);
