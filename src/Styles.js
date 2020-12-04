import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 8,
  },
  imageUrlStyle: {
    alignSelf: 'center',
    margin: 24,
    width: 400,
    height: 400,
  },
  crossIconStyle: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  imageModalStyle: {
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  titleStyle: {
    flex: 0.5,
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 12,
    margin: 8,
  },
  imageStyle: {
    flex: 0.5,
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 4,
  },
  loaderStyle: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
