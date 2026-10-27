import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import { AppFonts } from '../constants/UIconstants';

const style = StyleSheet.create({
    bigText: {
        fontSize : 40,
        fontWeight: '700',
        fontFamily : AppFonts.TEXT_FONT,
        color : AppColors.BIG_TEXT_COLOR
    },
})

type textProps = {
    text : String;
    bigTextLeftX? : number;
    bigTextTopY? : number;
};

export default function BigTextCompo({bigTextLeftX: LeftX, bigTextTopY: topY, text} : textProps) {
    return (
        <Text style={[style.bigText, {left : LeftX, top : topY,},]}> 
            {text}
        </Text>                
    )
}