import { css } from 'aphrodite';
import { FlipAnimation } from '../../assets/animations/FlipInX'; // Correct path to the animations
import Lottie from 'lottie-react'; // Correct component
import ConstructionAnimation from '../../assets/animations/ConstructionAnimation.json';
import useTitle from 'hooks/useTitle';

const Communities = () => {
    useTitle('Communities');

    return (
        <div className="mx-auto flex h-screen flex-col items-center justify-center bg-[#4a5c6836] text-2xl">
            <div className={css(FlipAnimation.slideInWithOpacity)}>
                <Lottie autoplay loop animationData={ConstructionAnimation} />
                <div className="flex min-h-[200px] items-center justify-center">
                    <p className="text-4xl text-[#71767b]">
                        Under construction.
                    </p>
                </div>
                <div className="mt-2 h-full w-full">
                    <Lottie
                        autoplay
                        loop
                        animationData={ConstructionAnimation}
                    />
                </div>
            </div>
        </div>
    );
};

export default Communities;
