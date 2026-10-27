import { View, StyleSheet } from 'react-native';
import CardCompo from '../components/CardCompo';
import BigTextCompo from '../components/BigTextCompo';
import SmallTextCompo from '../components/SmallTextCompo';
import { AppColors } from '../constants/UIconstants';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: AppColors.APP_BACKROUND_COLOR,
        flex : 1,
        padding: 20
    }
})

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            <CardCompo cardTopY={100} cardWidth={350} cardHeight={150}> 
                <SmallTextCompo smallTextLeftX={0} smallTextTopY={-8} text="Today"/>
                <BigTextCompo bigTextLeftX={0} bigTextTopY={-7} text="3h 24m"/>,
            </CardCompo> 
        </View>
    );
}