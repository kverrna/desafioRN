import React, { useEffect } from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import Styles from './Home.styles';
import Cell from '../../components/Cell/Cell';
import { findRep, findIssues } from '../../services/Github.service';

const buscaDados = async () => {
  const repositorio = await findRep('microsoft', 'vscode');
  const issues = await findIssues('microsoft', 'vscode');
  debugger;
};
const Home = (props) => {
  useEffect(() => {
    buscaDados();
  }, []);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.mainContainer}>
        {/* <Cell urlImageAvatar={organizationGit.avatarUrl} title={organizationGit.login} subtitle={organizationGit.repoName} onPress={() => props.navigation.navigate('Detail', { titulo: 'foi' })} /> */}
        {/* <Button title="navegar " onPress={() => props.navigation.navigate('Detail', { titulo: organizationGit.repoName })} /> */}
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = { title: 'GitIssues' };
export default Home;
