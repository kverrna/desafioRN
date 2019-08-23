import React, { useState } from 'react';
import {
  View, TextInput, Image, TouchableOpacity, Alert
} from 'react-native';
import { btnAdd } from '../temp';
import { findRep } from '../../services/Github.service';
import { saveRep } from '../../util/Persist';
import styles from './Search.styles';

const validateFormateTextInput = (text) => (String(text).match(/.+\/.+/g) === null);
const findRepositorie = async (text) => {
  try {
    const textArray = String(text).split('/');
    const organization = textArray[0].toLocaleLowerCase();
    const repositorieName = textArray[1].toLocaleLowerCase();
    const repositorie = await findRep(organization, repositorieName);
    saveRep(repositorie);
    Alert.alert('Sucesso!', 'Repositório encontrado e salvo, puxe a lista para atualizar o app');
  } catch (error) {
    Alert.alert('Erro', 'Erro ao tentar persistir resultado da pesquisa');
  }
};
const Search = () => {
  const [textSearch, setTextSearch] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder=" organização/repositorio " value={textSearch} onChangeText={setTextSearch} />
      </View>
      <TouchableOpacity
        style={styles.addContainer}
        onPress={async () => (validateFormateTextInput(textSearch) ? Alert.alert('Atenção', 'Digite no formato: organizacao/repositorio') : findRepositorie(textSearch))}
      >
        <Image style={styles.add} source={{ uri: btnAdd }} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
