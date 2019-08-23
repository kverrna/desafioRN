import React from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './Cell.styles';
import { setaNavegacao } from '../temp';


const Cell = ({
  urlImageAvatar, title, subtitle, roundAvatar, navigation
}) => {
  const navegarParaDetalhe = () => {
    navigation.navigate('Detail');
  };

  return (
    <TouchableOpacity onPress={navegarParaDetalhe} style={styles.cell}>
      <View style={styles.avatarContainer}>
        <Image
          style={(roundAvatar) ? styles.avatarRound : styles.avatar}
          source={{ uri: urlImageAvatar }}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
        <Text style={styles.textSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.navigationIconContainer}>
        <Image style={styles.navigationIcon} source={{ uri: setaNavegacao }} />
      </View>
    </TouchableOpacity>
  );
};

Cell.propTypes = {
  urlImageAvatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  roundAvatar: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default withNavigation(Cell);
