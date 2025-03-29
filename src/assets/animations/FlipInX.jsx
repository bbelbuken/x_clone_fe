import { StyleSheet } from 'aphrodite';

export const FlipAnimation = StyleSheet.create({
    slideInWithOpacity: {
        animationName: {
            '0%': {
                transform: 'translateY(-200%)',
                opacity: 0,
            },
            '100%': {
                transform: 'translateY(0)',
                opacity: 1,
            },
        },
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
});
