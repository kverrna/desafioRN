import {
  Alert
} from 'react-native';
import { getRepositories, getIssues } from './Github.api';

const findRep = async (organizacao, repositorio) => {
  const jsonObject = await getRepositories(organizacao, repositorio);
  const { success } = jsonObject;

  if (success) {
    const { id, name, organization } = jsonObject;
    const { login, avatar_url: avatarUrl } = organization;

    return {
      id, nome: name, organizacao: login, avatar: avatarUrl
    };
  }
  Alert.alert(`Erro ao buscar o repositório ${jsonObject.msg}`);
  return null;
};

const findIssues = async (organizacao, repositorio) => {
  const jsonObject = await getIssues(organizacao, repositorio);
  const { success } = jsonObject;
  if (success) {
    const list = jsonObject.issues.map((item) => {
      const {
        id, title, user, html_url: urlIssue, state: status
      } = item;
      const { avatar_url: avatarUsuario, login } = user;
      return {
        id, titulo: title, urlIssue, avatarUsuario, loginUsuario: login, status
      };
    });
    return list;
  }
  Alert.alert(`Erro ao buscar as issues de ${repositorio}`);
  return null;
};

export { findRep, findIssues };
