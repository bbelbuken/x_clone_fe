import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import SignInOptions from './signinoptions/SignInOptions';
import SignInPassword from './singinpassword/SignInPassword';
import { useLoginMutation } from 'features/auth/authApiSlice';
import { useLoggedInAccounts } from 'hooks/useLoggedInAccounts';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const SignInModal = () => {
    const [login, { isLoading, error }] = useLoginMutation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newStep, setNewStep] = useState(1);
    const navigate = useNavigate();
    const loggedInAccounts = useLoggedInAccounts();

    const handleNextSection2 = () => {
        setNewStep(newStep + 1);
    };

    const handleClose = useCallback(() => {
        // Get the stored routes
        const previousRouteWelcomePage = localStorage.getItem(
            'previousRouteWelcomePage',
        );
        const previousRouteSignIn = localStorage.getItem('previousRouteSignIn');

        // If we're on the welcome page (first login)
        if (previousRouteWelcomePage === '/') {
            navigate('/');
        }
        // If we're adding another account
        else if (previousRouteSignIn) {
            navigate(previousRouteSignIn);
        }
        // Default fallback
        else {
            navigate('/home');
        }
    }, [navigate]);

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    useEffect(() => {
        if (newStep === 3) {
            // If this is the first account (coming from welcome page)
            if (loggedInAccounts.length <= 1) {
                navigate('/home');
            }
            // If this is an additional account
            else {
                const previousRouteSignIn = localStorage.getItem(
                    'previousRouteSignIn',
                );
                navigate(previousRouteSignIn || '/home');
            }
        }
    }, [newStep, navigate, loggedInAccounts.length]);

    return (
        <>
            {isLoading && (
                <div className="z-50 flex h-screen w-full items-center justify-center">
                    <LoadingSpinner />
                </div>
            )}
            <div
                className="fixed inset-0 z-40 flex items-center justify-center bg-[#4a5c687c]"
                onClick={handleClickOutside}
            >
                {newStep === 1 && (
                    <SignInOptions
                        handleClose={handleClose}
                        handleNextSection2={handleNextSection2}
                        newStep={newStep}
                        setUsername={setUsername}
                        setEmail={setEmail}
                        error={error}
                        login={login}
                    />
                )}
                {newStep === 2 && (
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
                        error={error}
                    />
                )}
            </div>
        </>
    );
};

export default SignInModal;
