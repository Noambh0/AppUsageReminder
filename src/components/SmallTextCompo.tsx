import { Text, StyleSheet } from "react-native"; 
import { AppFonts } from "../constants/UIconstants";
import { AppColors } from "../constants/UIconstants";

const style = StyleSheet.create ({
    smallText: {
        fontFamily : AppFonts.TEXT_FONT,
        color : AppColors.SMALL_TEXT_COLOR,
        textAlign : 'left',
    }
})

type smallTextProps = {
    text : String;
    fontSize : number;
    smallTextLeftX : number;
    smallTextTopY : number;
}

export default function SmallTextCompo({text, fontSize : fontSize, smallTextLeftX : leftX, smallTextTopY : topY} : smallTextProps) {
    return (
        <Text style={[style.smallText, {fontSize : fontSize, left : leftX, top : topY}]}>
            {text}
        </Text>
    )

}