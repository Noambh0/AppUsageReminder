import { StyleSheet, View } from "react-native";
import { AppColors } from "../constants/UIconstants";
import { AppFonts } from "../constants/UIconstants";

const style = StyleSheet.create ({
    barBackground: {
        backgroundColor : AppColors.BAR_BACKGROUND_COLOR,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: '#292F35',
        overflow : 'hidden',
    },

    barFill: {
        backgroundColor : AppColors.BAR_FILLֹֹֹֹֹֹֹֹ_COLOR,
        borderRadius : 26
    }
})

type barProps = {
    barLeftX? : number;
    barTopY? : number;
    width : number;
    height : number;
    presentage : number;
}

export default function BarCompo({barLeftX : leftX, barTopY : topY, width : width, height : height, presentage} : barProps) {
    return (
        <View style={[style.barBackground, {left : leftX, top : topY, width : width, height : height}]}>
            <View style={[style.barFill, {width : width * (presentage / 100), height : height}]}> 
            </View>
        </View>
    ) 
}   

//(minute / minute) * 100 = present of first minute.