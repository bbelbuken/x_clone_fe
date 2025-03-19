import React, { useCallback, useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordArea from './passwordarea/PasswordArea';
import AvatarArea from './avatararea/AvatarArea';
import UsernameArea from './usernamearea/UsernameArea';
import FormArea from './formarea/FormArea';
import { useSignUpMutation } from 'features/auth/authApiSlice';

const CreateAccountModal = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [media, setMedia] = useState(null);

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

    const payload = {
        username,
        fullname: name,
        password,
        email,
        dateOfBirth: `${day}-${month}-${year}`,
        avatar: media,
    };
    console.log(payload);

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
                    email={email}
                    setEmail={setEmail}
                    month={month}
                    setMonth={setMonth}
                    day={day}
                    setDay={setDay}
                    year={year}
                    setYear={setYear}
                />
            )}

            {step == 2 && (
                <PasswordArea
                    handleNextSection={handleNextSection}
                    password={password}
                    setPassword={setPassword}
                />
            )}
            {step == 3 && (
                <AvatarArea
                    handleNextSection={handleNextSection}
                    media={media}
                    setMedia={setMedia}
                />
            )}
            {step == 4 && (
                <UsernameArea
                    name={name}
                    username={username}
                    setUsername={setUsername}
                    setName={setName}
                    setEmail={setEmail}
                    setMonth={setMonth}
                    setDay={setDay}
                    setYear={setYear}
                    setMedia={setMedia}
                    setStep={setStep}
                    payload={payload}
                />
            )}
        </div>
    );
};

export default CreateAccountModal;
