import { StyleSheet, Image, FlatList } from 'react-native';
import { Text, View } from '@components/Themed';
import sectionData from 'assets/data/sectionData.json';
import SectionListItem from '@components/SectionListItem';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <SectionListItem section={sectionData[0]} />
      <SectionListItem section={sectionData[1]} /> */}
      <FlatList
        data={sectionData}
        renderItem={({ item }) => <SectionListItem section={item} />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{justifyContent: 'space-between', gap: 10}}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3ef'
 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
