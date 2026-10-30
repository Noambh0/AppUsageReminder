import { View, StyleSheet, Pressable } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import CardCompo from '../components/CardCompo';
import BigTextCompo from '../components/BigTextCompo';
import SmallTextCompo from '../components/SmallTextCompo';
import BarCompo from '../components/ProgressBar';
import ArrowButtonCompo from '../components/ArrowButtonCompo';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: AppColors.APP_BACKROUND_COLOR,
        flex : 1,
        padding: 20
        }
})

var goalHours = 4;
var goalMinute = 0;
var currentHourUsage = 3;
var currentMinuteUsage = 24;

var sumGoalMinute = goalHours * 60 + goalMinute;
var sumCurrentMinuteUsage = currentHourUsage * 60 + currentMinuteUsage;

function AppUsageCardCard() {
    return (
        <CardCompo cardTopY={120} cardWidth={350} cardHeight={175}> 
            <SmallTextCompo fontSize={20} smallTextLeftX={0} smallTextTopY={-8} text="Today"/>
            <BigTextCompo fontSize={40} bigTextLeftX={0} bigTextTopY={-7} text={`${currentHourUsage}h ${currentMinuteUsage}m`}/>                
            <BarCompo barLeftX={-2} barTopY={0} width={300} height={25} presentage={(sumCurrentMinuteUsage/sumGoalMinute) * 100}/>
            <SmallTextCompo fontSize={17} smallTextLeftX={200} smallTextTopY={-65} text="vs yesterday"/>
            <SmallTextCompo fontSize={17} smallTextLeftX={0} smallTextTopY={-15} text={`Goal: ${goalHours}h ${goalMinute}m`}/>
        </CardCompo> 
    )
}

function MostUsedAppsCard() {
    return (
        <CardCompo cardTopY={310} cardWidth={350} cardHeight={370}>
            <BigTextCompo fontSize={20} bigTextLeftX={0} bigTextTopY={-5} text="Most Used App"/>
            <ArrowButtonCompo ArrowButtonLeftX={269} ArrowButtonTopY={-32} ArrowButtonHeight={40} ArrowButtonWidth={100}/>
        </CardCompo>
    )
}

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            <BigTextCompo fontSize={40} bigTextLeftX={20} bigTextTopY={35} text="App Usage"/>
            <AppUsageCardCard/>
            <MostUsedAppsCard/>
        </View>
    );
}