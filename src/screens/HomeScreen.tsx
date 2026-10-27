import { View, StyleSheet } from 'react-native';
import { AppColors, AppFonts } from '../constants/UIconstants';
import CardCompo from '../components/CardCompo';
import BigTextCompo from '../components/BigTextCompo';

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#101213',
        flex : 1,
        padding: 20
    },

    title: {
        fontSize : 40,
        fontWeight: '700',
        fontFamily : AppFonts.TEXT_FONT,
        color : AppColors.BIG_TEXT_COLOR,
        textAlign : 'left',
        top : 32
    },

    smallText: {
        fontSize : 20,
        fontFamily : AppFonts.TEXT_FONT,
        color : AppColors.SMALL_TEXT_COLOR,
        textAlign : 'left',
        left : 20,
        top : 20
    },
})

export default function HomeScreen() {
    return (
        <View style={styles.screen}>
            <CardCompo cardTopY={100} cardWidth={350} cardHeight={150}> 
                <BigTextCompo bigTextLeftX={10} bigTextTopY={10} text=""/>
            </CardCompo> 
        </View>
    );
}