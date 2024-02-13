import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@components/Themed';
import sectionData from 'assets/data/sectionData.json';
import SectionListItem from '@components/SectionListItem';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SectionListItem section={sectionData[0]} />
      <SectionListItem section={sectionData[1]} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
