import { css } from 'aphrodite';
import { FlipAnimation } from '../../assets/animations/FlipInX';
import Lottie from 'lottie-react'; // Use the correct component: Lottie
import ConstructionAnimation from '../../assets/animations/ConstructionAnimation.json';

const Organizations = () => {
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

export default Organizations;
