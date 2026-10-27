import { View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import { Children, type ReactNode } from 'react';

const style = StyleSheet.create({
    card: {
        backgroundColor: AppColors.CARD_COLOR,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: '#292F35',
        padding: 24,
        alignSelf: 'center',  
    }
})

type CardProps = {
    cardLeftX? : number;
    cardTopY? : number;
    cardWidth : number;
    cardHeight : number;
    children?: ReactNode;
};

export default function CardCompo({cardLeftX: leftX, cardTopY: topY, cardWidth, cardHeight, children} : CardProps) {
    return (
        <View style={[style.card, {
            position : 'absolute',
            left : leftX,
            top : topY,
            width : cardWidth,
            height : cardHeight, 
        },
    ]}> 
        {children} 
    </View>
)}