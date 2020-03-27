import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#333',
    },
    caption: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#999',
    },
    info: {
        backgroundColor: '#4eb1de',
        color: '#fff',
        fontSize: 11,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 40
    },
    mesh: {
      position: 'relative',
      flex: 1,
      width: '95%',
      top: 0,
      height: 200,
      backgroundColor: '#fff',
      borderRadius: 10,
      margin: '2.5%'
    },
    shadowComponent: {
      shadowColor: Colors.lighter,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0,
      shadowRadius: 5,
      elevation: 10,
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
});

export default styles