import { WelcomeFooterData } from 'features/auth/welcome/footer/footerdata/WelcomeFooterData';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const LegalDisclaimerPassword = memo(() => {
    const tos = WelcomeFooterData.find(
        (item) => item.title === 'Terms of Service',
    );
    const privacy = WelcomeFooterData.find(
        (item) => item.title === 'Privacy Policy',
    );
    const cookie = WelcomeFooterData.find(
        (item) => item.title === 'Cookie Policy',
    );
    return (
        <div>
            <span>
                By signing up, you agree to the
                <Link to={tos.path} className="mx-0.5 text-[#1d9bf0]">
                    Terms of Service
                </Link>
                and
                <Link to={privacy.path} className="mx-0.5 text-[#1d9bf0]">
                    {' '}
                    Privacy Policy,
                </Link>
                , including
                <Link to={cookie.path} className="mx-0.5 text-[#1d9bf0]">
                    {' '}
                    Cookie Use.
                </Link>
                X may use your contact information, including your email address
                and phone number for purposes outlined in our Privacy Policy,
                like keeping your account secure and personalizing our services,
                including ads.
                <Link to={privacy.path} className="mx-0.5 text-[#1d9bf0]">
                    Learn more.
                </Link>
                Others will be able to find you by email or phone number, when
                provided, unless you choose otherwise{' '}
                <span className="text-[#1d9bf0]">here</span>.
            </span>
        </div>
    );
});

LegalDisclaimerPassword.displayName = 'LegalDisclaimerPassword';
export default LegalDisclaimerPassword;
