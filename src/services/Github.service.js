import {
  Alert
} from 'react-native';
import { getRepositories, getIssuesClosed, getIssuesOpen } from './Github.api';

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
const mapListResponse = (object = []) => {
  const list = object.issues.map((item) => {
    const {
      id, title, user, html_url: urlIssue, state: status
    } = item;
    const { avatar_url: avatarUsuario, login } = user;
    return {
      id, titulo: title, urlIssue, avatarUsuario, loginUsuario: login, status
    };
  });
  return list;
};
const findIssues = async (organizacao, repositorio) => {
  try {
    const jsonObjectOpen = await getIssuesOpen(organizacao, repositorio);
    const jsonObjectClosed = await getIssuesClosed(organizacao, repositorio);

    let listOpen = [];
    let listClosed = [];

    const { success: successOpen } = jsonObjectOpen;
    const { success: successClosed } = jsonObjectClosed;
    if (successOpen) {
      listOpen = mapListResponse(jsonObjectOpen);
    }
    if (successClosed) {
      listClosed = mapListResponse(jsonObjectClosed);
    }
    return [...listOpen, ...listClosed];
  } catch (error) {
    Alert.alert(`Erro ao buscar as issues  abertas e fechadas de ${repositorio}`);
    return null;
  }
};

export { findRep, findIssues };
