import { View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import CardCompo from '../components/CardCompo';
import BigTextCompo from '../components/BigTextCompo';
import SmallTextCompo from '../components/SmallTextCompo';
import BarCompo from '../components/ProgressBar';

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

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            <CardCompo cardTopY={100} cardWidth={350} cardHeight={175}> 
                <SmallTextCompo fontSize={20} smallTextLeftX={0} smallTextTopY={-8} text="Today"/>
                <BigTextCompo fontSize={40} bigTextLeftX={0} bigTextTopY={-7} text={`${currentHourUsage}h ${currentMinuteUsage}m`}/>
                <BarCompo barLeftX={-2} barTopY={0} width={300} height={25} presentage={(sumCurrentMinuteUsage/sumGoalMinute) * 100}/>
                <SmallTextCompo fontSize={17} smallTextLeftX={200} smallTextTopY={-65} text="vs yesterday"/>
                <SmallTextCompo fontSize={17} smallTextLeftX={0} smallTextTopY={-15} text={`Goal: ${goalHours}h ${goalMinute}m`}/>
            </CardCompo> 
        </View>
    );
}