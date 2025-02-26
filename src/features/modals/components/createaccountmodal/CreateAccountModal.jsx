import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormArea from './formarea/FormArea';
import PasswordArea from './passwordarea/PasswordArea';

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
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c]"
            onClick={handleClickOutside}
        >
            {step == 1 && (
                <FormArea
                    handleClose={handleClose}
                    handleNextSection={handleNextSection}
                />
            )}
            {step == 2 && <PasswordArea handleClose={handleClose} />}
        </div>
    );
};

export default CreateAccountModal;
