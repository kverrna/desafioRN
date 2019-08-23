import React, { useState, useEffect } from 'react';
import {
  View, SafeAreaView, Button, Alert
} from 'react-native';
import Styles from './Home.styles';
import Cell from '../../components/Cell/Cell';
import { getRepositories } from '../../services/Github.services';

const Home = (props) => {
  const [organizationGit, setOrganizationGit] = useState({
    repoName: '', organization: '', login: '', avatarUrl: 'https://cdn-images-1.medium.com/max/672/1*N6T9NbXrm_K-ZIdX1Xknpw.png'
  });

  useEffect(async () => {
    const jsonObject = await getRepositories('microsoftd', 'vscode');
    const { success } = jsonObject;
    if (success) {
      const { name, organization } = jsonObject;
      const { login, avatar_url: avatarUrl } = organization;
      setOrganizationGit({
        repoName: name, organization, login, avatarUrl
      });
    } else {
      Alert.alert(`Erro ao buscar o repositório ${jsonObject.msg}`);
    }
  }, []);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.mainContainer}>
        <Cell urlImageAvatar={organizationGit.avatarUrl} title={organizationGit.login} subtitle={organizationGit.repoName} onPress={() => props.navigation.navigate('Detail', { titulo: 'foi' })} />
        <Button title="navegar " onPress={() => props.navigation.navigate('Detail', { titulo: organizationGit.repoName })} />
      </View>
    </SafeAreaView>
  );
};

Home.navigationOptions = { title: 'GitIssues' };
export default Home;
