import { View, StyleSheet } from 'react-native';
import { AppColors } from '../constants/UIconstants';
import { Children, type ReactNode } from 'react';

const style = StyleSheet.create({
    card: {
        borderRadius: 26,
        borderWidth: 1,
        borderColor: '#292F35',
        padding: 24,
        alignSelf: 'center',  
    }
})

type CardProps = {
    cardColor : string;
    cardLeftX? : number;
    cardTopY? : number;
    cardWidth : number;
    cardHeight : number;
    children?: ReactNode;
};

export default function CardCompo({cardColor: cardColor, cardLeftX: leftX, cardTopY: topY, cardWidth, cardHeight, children} : CardProps) {
    return (
        <View style={[style.card, {
            position : 'absolute',
            backgroundColor : cardColor,
            left : leftX,
            top : topY,
            width : cardWidth,
            height : cardHeight, 
        },
    ]}> 
        {children} 
    </View>
)}