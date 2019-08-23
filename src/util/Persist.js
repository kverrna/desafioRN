
import { AsyncStorage, Alert } from 'react-native';

const saveRep = async ({
  id, nome, organizacao, avatar
}) => {
  try {
    const obj = {
      id, nome, organizacao, avatar
    };
    const key = String(id);
    const value = JSON.stringify(obj);
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Alert.alert(`Erro ao tentar persistir os dados de ${nome}`);
  }
};

const getAllReps = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();

    const arrayPromises = await keys.map(async (k) => AsyncStorage.getItem(k));
    const arrayRepsStrings = await Promise.all(arrayPromises);
    const retorno = arrayRepsStrings.map((item) => JSON.parse(item));
    return retorno;
  } catch (error) {
    Alert.alert('Erro ao tentar recuperar repositorios armazerados ');
    return null;
  }
};

export { saveRep, getAllReps };
