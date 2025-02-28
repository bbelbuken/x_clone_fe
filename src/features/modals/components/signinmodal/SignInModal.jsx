import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import SignInOptions from './signinoptions/SignInOptions';

const SignInModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
                <SignInOptions
                    handleClose={handleClose}
                    handleNextSection={handleNextSection}
                    step={step}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                />
            )}
        </div>
    );
};

export default SignInModal;
