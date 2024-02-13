import { StyleSheet, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import sectionData from '../../assets/data/sectionData.json';
import { Text, View } from '@/src/components/Themed';
import {Section} from '@/src/types';

export const defaultImage = 'https://teen.smokefree.gov/sites/default/files/styles/landing_page_blocks/public/2020-06/shutterstock_1741950803.png?itok=jFFbEPLG'
type SectionListItemProps = {
  section: Section;
}

const SectionListItem = ({ section }: SectionListItemProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{section.title}</Text>
      <Text>{section.text}</Text>
      <Image style={styles.image} source={{uri: section.image || defaultImage}} />
    </View>
  );
}

export default SectionListItem;



const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
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
