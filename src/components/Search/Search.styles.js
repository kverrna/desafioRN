import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  inputContainer: {
    backgroundColor: '#ffe',
    borderBottomColor: '#222',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginTop: 15,
    marginBottom: 10,
    marginEnd: 10,
    marginStart: 10,
    justifyContent: 'center',
    flex: 5
  },
  input: {
    marginStart: 10,
  },
  addContainer: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  add: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginEnd: 10,

  }
});
