import { StyleSheet, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../../../assets/vape-free-assets/stressy-depressy.jpg')}  />
      <Text style={styles.title}>Quit Vaping</Text>
      <Text style={styles.title}>Quitting can be tough,
       but you are tougher. Use our info and resources to quit vaping and stay vape-free.
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
