import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import SignInOptions from './signinoptions/SignInOptions';
import SignInPassword from './singinpassword/SignInPassword';
import { useLoginMutation } from 'features/auth/authApiSlice';

const SignInModal = () => {
    const [login, { isLoading, error }] = useLoginMutation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newStep, setNewStep] = useState(1);
    const navigate = useNavigate();

    const handleNextSection2 = () => {
        setNewStep(newStep + 1);
    };

    const handleClose = useCallback(() => {
        const outsideWelcomePage = location.pathname !== '/';
        const previousRoute = localStorage.getItem('previousRouteWelcomePage');
        const previousRouteSignIn = localStorage.getItem('previousRouteSignIn');

        navigate(outsideWelcomePage ? previousRouteSignIn : previousRoute);
    }, [navigate]);

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget && newStep == 1) {
            handleClose();
        }
    };

    useEffect(() => {
        if (newStep === 3) {
            navigate('/home');
        }
    }, [newStep, navigate]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c]"
            onClick={handleClickOutside}
        >
            {newStep == 1 && (
                <SignInOptions
                    handleClose={handleClose}
                    handleNextSection2={handleNextSection2}
                    newStep={newStep}
                    setUsername={setUsername}
                    setEmail={setEmail}
                    error={error}
                    login={login}
                    isLoading={isLoading}
                />
            )}
            {newStep == 2 && (
                <SignInPassword
                    username={username}
                    setUsername={setUsername}
                    email={email}
                    setEmail={setEmail}
                    handleClose={handleClose}
                    handleNextSection2={handleNextSection2}
                    newStep={newStep}
                    password={password}
                    setPassword={setPassword}
                    login={login}
                    isLoading={isLoading}
                    error={error}
                />
            )}
        </div>
    );
};

export default SignInModal;
