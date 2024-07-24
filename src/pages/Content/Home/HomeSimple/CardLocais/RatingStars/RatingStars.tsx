import React from 'react';
import { View, StyleSheet } from 'react-native';
import StarIcon from '@mobile/assets/starSVG.svg'; // Substitua pelo seu ícone de estrela SVG
import StarOutlineIcon from '@mobile/assets/starOutlineSVG.svg'; // Substitua pelo seu ícone de estrela vazia SVG

interface RatingStarsProps {
    rating: number; // Avaliação de 0 a 5
    totalStars?: number; // Número total de estrelas (padrão é 5)
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, totalStars = 5 }) => {
    const filledStars = Math.min(Math.max(rating, 0), totalStars); // Garantir que a avaliação esteja entre 0 e totalStars

    return (
        <View style={styles.starContainer}>
            {[...Array(totalStars)].map((_, index) => (
                index < filledStars 
                ? <StarIcon key={index} width={15} height={20} fill="yellow" /> // Substitua "yellow" pela cor desejada para as estrelas preenchidas
                : <StarOutlineIcon key={index} width={15} height={20} fill="gray" /> // Substitua "gray" pela cor desejada para as estrelas vazias
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
    },
});

export { RatingStars };
