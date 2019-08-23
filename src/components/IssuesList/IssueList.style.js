import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  controlContainer: {
    backgroundColor: 'rgb(221,221,221)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 20,
    marginTop: 10,
    marginBottom: 10,
    marginEnd: 20,
    height: 50,
    borderRadius: 10
  },
  btnContainer: {
    flex: 2,
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600'
  },
  btnTextDissmis: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'gray'
  },
  listContainer: {
    flex: 5
  }

});
