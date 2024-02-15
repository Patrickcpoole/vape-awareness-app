import { StyleSheet, Image } from 'react-native';
import Colors from '@constants/Colors';
import sectionData from '@assets/data/sectionData.json';
import { Text, View } from '@components/Themed';
import { Section } from '@/types';

export const defaultImage =
	'https://teen.smokefree.gov/sites/default/files/styles/landing_page_blocks/public/2020-06/shutterstock_1741950803.png?itok=jFFbEPLG';
type SectionListItemProps = {
	section: Section;
};

const SectionListItem = ({ section }: SectionListItemProps) => {
	return (
		<View style={styles.sectionContainer}>
			<Image
				style={styles.image}
				source={{ uri: section.image || defaultImage }}
			/>
			<Text style={styles.sectionTitle}>{section.title}</Text>
			<Text style={{ paddingLeft: 15, paddingBottom: 15, paddingRight:15 }}>{section.text}</Text>
		</View>
	);
};

export default SectionListItem;

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
    elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 2, height: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		borderRadius: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.light.tint,
		padding: 15,
	},
	image: {
		width: '100%',
		aspectRatio: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
