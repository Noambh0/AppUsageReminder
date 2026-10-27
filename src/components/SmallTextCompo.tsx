import { Text, StyleSheet } from "react-native"; 
import { AppFonts } from "../constants/UIconstants";
import { AppColors } from "../constants/UIconstants";

const style = StyleSheet.create ({
    smallText: {
        fontSize : 20,
        fontFamily : AppFonts.TEXT_FONT,
        color : AppColors.SMALL_TEXT_COLOR,
        textAlign : 'left',
    }
})

type smallTextProps = {
    text : String;
    smallTextLeftX : number;
    smallTextTopY : number;
}

export default function SmallTextCompo({text, smallTextLeftX : leftX, smallTextTopY : topY} : smallTextProps) {
    return (
        <Text style={[style.smallText, {left : leftX, top : topY}]}>
            {text}
        </Text>
    )

}