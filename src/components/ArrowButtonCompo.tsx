import { Pressable, StyleSheet } from "react-native";
import { AppColors } from "../constants/UIconstants";
import { Ionicons } from "@expo/vector-icons";

const style = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 12
    },

    arrow: {
        color : AppColors.ARROW_BUTTON
    }
})

type ArrowButtonProps = {
    //TODO implement on press screan.
    //onPress : ()=> void;
    ArrowButtonTopY : number;
    ArrowButtonLeftX : number;
    ArrowButtonWidth : number;
    ArrowButtonHeight : number;
}

export default function ArrowButtonCompo({ArrowButtonTopY : topY, ArrowButtonLeftX : leftX, ArrowButtonWidth : width, ArrowButtonHeight : height} : ArrowButtonProps) {
    return (
        <Pressable style={[style.button, {top : topY, left : leftX, width : width, height : height}]}>
            <Ionicons name="chevron-forward" size={24} color={AppColors.ARROW_BUTTON}/>
        </Pressable>
    )
}