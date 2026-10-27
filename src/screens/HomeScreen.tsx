import { View, Text, StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../constants/UIconstants';
import CardCompo from '../components/CardCompo';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#101213',
        flex : 1,
        padding: 20
    },
})

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
        </View>
    );
}