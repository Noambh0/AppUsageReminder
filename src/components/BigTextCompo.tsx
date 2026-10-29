import { Text, StyleSheet } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import { AppFonts } from '../constants/UIconstants';

const style = StyleSheet.create({
    bigText: {
        fontWeight: '700',
        fontFamily : AppFonts.TEXT_FONT,
        color : AppColors.BIG_TEXT_COLOR
    }
})

type bigTextProps = {
    text : String;
    fontSize : number;
    bigTextLeftX? : number;
    bigTextTopY? : number;
}

export default function BigTextCompo({text, fontSize : fontSize, bigTextLeftX: LeftX, bigTextTopY: topY} : bigTextProps) {
    return (
        <Text style={[style.bigText, {fontSize : fontSize, left : LeftX, top : topY}]}> 
            {text}
        </Text>                
    )
}