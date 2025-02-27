import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormArea from './formarea/FormArea';
import PasswordArea from './passwordarea/PasswordArea';
import AvatarArea from './avatararea/AvatarArea';
import UsernameArea from './usernamearea/UsernameArea';

const CreateAccountModal = () => {
    const [name, setName] = useState('');
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
    useEffect(() => {
        if (step === 5) {
            navigate('/home');
        }
    }, [step, navigate]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${step < 3 ? 'bg-[#4a5c687c]' : 'bg-[#242e33]'} `}
            onClick={handleClickOutside}
        >
            {step == 1 && (
                <FormArea
                    handleClose={handleClose}
                    handleNextSection={handleNextSection}
                    step={step}
                    name={name}
                    setName={setName}
                />
            )}
            {step == 2 && (
                <PasswordArea handleNextSection={handleNextSection} />
            )}
            {step == 3 && <AvatarArea handleNextSection={handleNextSection} />}
            {step == 4 && (
                <UsernameArea
                    handleNextSection={handleNextSection}
                    name={name}
                />
            )}
        </div>
    );
};

export default CreateAccountModal;
