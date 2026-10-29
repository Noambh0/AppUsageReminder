import { View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import CardCompo from '../components/CardCompo';
import BigTextCompo from '../components/BigTextCompo';
import SmallTextCompo from '../components/SmallTextCompo';
import barCompo from '../components/ProgressBar';
import BarCompo from '../components/ProgressBar';

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
            <CardCompo cardTopY={100} cardWidth={350} cardHeight={175}> 
                <SmallTextCompo fontSize={20} smallTextLeftX={0} smallTextTopY={-8} text="Today"/>
                <BigTextCompo fontSize={40} bigTextLeftX={0} bigTextTopY={-7} text="3h 24m"/>
                <BarCompo barLeftX={-2} barTopY={0} width={300} height={25} presentage={85}/>
                <SmallTextCompo fontSize={17} smallTextLeftX={200} smallTextTopY={-65} text="vs yesterday"/>
                <SmallTextCompo fontSize={17} smallTextLeftX={0} smallTextTopY={-15} text="Goal: 4h 0m"/>
            </CardCompo> 
        </View>
    );
}