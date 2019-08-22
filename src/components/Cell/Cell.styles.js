import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#fff',
    height: 100,
    marginEnd: 10,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  avatarContainer: {
    flex: 1
  },
  avatar: {
    backgroundColor: 'transparent',
    height: 60,
    width: 60,
    marginLeft: 10,

  },
  containerText: {
    alignItems: 'flex-start',
    margin: 10,
    flex: 3
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '900',
  },
  textSubtitle: {
    fontSize: 13,
    fontWeight: 'normal'
  },
  navigationIcon: {
    height: 20, width: 20, alignSelf: 'flex-end'
  },
  navigationIconContainer: {
    flex: 1, marginEnd: 3
  }
});

export default styles;
