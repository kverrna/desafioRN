import React from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Cell.styles';
import temp from '../temp';

const Cell = ({
  urlImageAvatar, title, subtitle, onPress
}) => (
  <TouchableOpacity onPress={onPress} style={styles.cell}>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{ uri: urlImageAvatar }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      <Text style={styles.textSubtitle}>{subtitle}</Text>
    </View>
    <View style={styles.navigationIconContainer}>
      <Image style={styles.navigationIcon} source={{ uri: temp }} />
    </View>
  </TouchableOpacity>
);

Cell.prototype = {
  urlImageAvatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Cell;
