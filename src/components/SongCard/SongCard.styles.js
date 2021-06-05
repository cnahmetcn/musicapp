import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 13,
    flex: 1,
    justifyContent: 'center',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  artist: {},
  year: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  album: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  content_container: {
    flexDirection: 'row',
  },
});
