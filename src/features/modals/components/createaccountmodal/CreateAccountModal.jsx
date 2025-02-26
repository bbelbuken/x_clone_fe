import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormArea from './formarea/FormArea';
import PasswordArea from './passwordarea/PasswordArea';
import AvatarArea from './avatararea/AvatarArea';

const CreateAccountModal = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleNextSection = () => {
        setStep(step + 1);
    };

    const handleClose = useCallback(() => {
        const previousRoute = localStorage.getItem('previousRouteWelcomePage');
        navigate(previousRoute || '/');
    }, [navigate]);

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget && step == 1) {
            handleClose();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${step == 1 ? 'bg-[#4a5c687c]' : 'bg-[#242e33]'} `}
            onClick={handleClickOutside}
        >
            {step == 1 && (
                <FormArea
                    handleClose={handleClose}
                    handleNextSection={handleNextSection}
                    step={step}
                />
            )}
            {step == 2 && (
                <PasswordArea handleNextSection={handleNextSection} />
            )}
            {step == 3 && <AvatarArea handleNextSection={handleNextSection} />}
        </div>
    );
};

export default CreateAccountModal;
