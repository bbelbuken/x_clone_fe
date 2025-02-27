import Button from 'components/buttons/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const openCreateAccountModal = (e) => {
        e.preventDefault();
        const previousRouteWelcomePage = location.pathname;
        localStorage.setItem(
            'previousRouteWelcomePage',
            previousRouteWelcomePage,
        );
        navigate('i/flow/signup', { state: { background: location.pathname } });
    };
    return (
        <div className="mb-2 flex h-[40px] w-[300px] items-center justify-center rounded-[20px] bg-[#e7e9ea]">
            <Button
                size="signup"
                title="sign up button"
                className={
                    'flex h-11 w-80 cursor-pointer items-center justify-center border-0 bg-[#1d9bf0] hover:bg-[#1a8cd8]'
                }
                onClick={openCreateAccountModal}
            >
                <span className="ml-2 text-sm font-bold tracking-wider text-[#e7e9ea]">
                    Create account
                </span>
            </Button>
        </div>
    );
};

export default CreateAccount;
