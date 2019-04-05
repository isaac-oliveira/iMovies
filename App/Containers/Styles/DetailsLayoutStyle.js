import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },

  logo: {
    width: '100%',
    height: '60%',
  },

  card: {
    margin: 8,
    height: '44%',
    marginTop: '-10%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  title: {
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
  },

  desc: {
    fontSize: 16,
    color: 'gray',
    padding: 10,
    textAlign: 'justify',
  },
});
