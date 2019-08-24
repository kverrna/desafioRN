
import React, { useState, useEffect } from 'react';
import {
  View, TouchableOpacity, Text, FlatList, Linking
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './IssueList.style';
import Cell from '../Cell/Cell';

const IssueList = ({ listIssues }) => {
  const [current, setCurrent] = useState(0);
  const [list, setList] = useState(listIssues);

  useEffect(() => {
    switch (current) {
      case 0: setList(listIssues.filter((i) => i.status)); break;
      case 1: setList(listIssues.filter((i) => i.status === 'open')); break;
      case 2: setList(listIssues.filter((i) => i.status === 'closed')); break;
      default: setList(listIssues); break;
    }
  }, []);
  const btnOnPress = (currentNumber) => {
    setCurrent(currentNumber);
  };
  const renderBtn = (currentNumber, title, filterAction) => (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => { btnOnPress(currentNumber); filterAction(); }}
    >
      <Text style={(current === currentNumber) ? styles.btnText : styles.btnTextDissmis}>
        {title}
      </Text>
    </TouchableOpacity>
  );
  const renderFlatListItem = ({ item }) => {
    const {
      avatarUsuario, titulo, loginUsuario, urlIssue
    } = item;

    return (
      <Cell
        urlImageAvatar={avatarUsuario}
        title={titulo}
        subtitle={loginUsuario}
        onPress={() => {
          Linking.openURL(urlIssue);
        }}
        roundAvatar
      />
    );
  };

  const flatListKeyExtractor = (item) => toString(item.id);
  const renderFlatList = (issL) => (
    <FlatList data={issL} renderItem={renderFlatListItem} keyExtractor={flatListKeyExtractor} />
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.controlContainer}>
        {renderBtn(0, 'Todas', () => setList(listIssues.filter((i) => i.status)))}
        {renderBtn(1, 'Abertas', () => setList(listIssues.filter((i) => i.status === 'open')))}
        {renderBtn(2, 'Fechadas', () => setList(listIssues.filter((i) => i.status === 'closed')))}
      </View>
      <View style={styles.listContainer}>
        {renderFlatList(list)}
      </View>
    </View>
  );
};
IssueList.propTypes = {
  listIssues: PropTypes.arrayOf({
    avatarUsuario: PropTypes.string,
    titulo: PropTypes.string,
    loginUsuario: PropTypes.string,
    urlIssue: PropTypes.string,
  }).isRequired,
};
export default IssueList;
