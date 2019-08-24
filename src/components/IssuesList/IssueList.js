
import React, { useState, useEffect, useReducer } from 'react';
import {
  View, TouchableOpacity, Text, FlatList, Linking
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './IssueList.style';
import Cell from '../Cell/Cell';

const IssueList = ({ listIssues }) => {
  const [current, setCurrent] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TODAS': return listIssues.filter((i) => i.status);
      case 'ABERTAS': return listIssues.filter((i) => i.status === 'open');
      case 'FECHADAS': return listIssues.filter((i) => i.status === 'closed');
      default: return state;
    }
  };

  const [list, dispatch] = useReducer(reducer, listIssues);

  useEffect(() => {
    dispatch({ type: 'TODAS' });
  }, [listIssues]);

  const renderBtn = (currentNumber, title, filterAction) => (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => { setCurrent(currentNumber); filterAction(); }}
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
        {renderBtn(0, 'Todas', () => { dispatch({ type: 'TODAS' }); })}
        {renderBtn(1, 'Abertas', () => { dispatch({ type: 'ABERTAS' }); })}
        {renderBtn(2, 'Fechadas', () => { dispatch({ type: 'FECHADAS' }); })}

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
export default withNavigation(IssueList);
