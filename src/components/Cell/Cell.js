import React from 'react';
import {
  View, Text, Image
} from 'react-native';
import styles from './Cell.styles';
import temp from '../temp';

const Cell = () => (
  <View style={styles.cell}>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/69631?v=4' }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode="tail">SubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtitulo</Text>
      <Text style={styles.textSubtitle}>SubtituloSubtituloSubtitulo</Text>
    </View>
    <View style={styles.navigationIconContainer}>
      <Image style={styles.navigationIcon} source={{ uri: temp }} />
    </View>
  </View>
);

export default Cell;
