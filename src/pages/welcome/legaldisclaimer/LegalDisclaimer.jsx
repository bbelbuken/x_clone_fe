import { WelcomeFooterData } from '../footer/footerdata/WelcomeFooterData';
import { Link } from 'react-router-dom';

const LegalDisclaimer = () => {
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
        <div className="mb-5 max-w-[380px] min-w-0 text-center text-[11.4px] leading-3 text-[#71767b] md:text-start">
            By signing up, you agree to the
            <Link to={tos.path} className="mx-0.5 text-[#1d9bf0]">
                Terms of Service
            </Link>
            and
            <Link to={privacy.path} className="mx-0.5 text-[#1d9bf0]">
                Privacy Policy,
            </Link>
            including
            <Link to={cookie.path} className="mx-0.5 text-[#1d9bf0]">
                Cookie Use.
            </Link>
        </div>
    );
};

export default LegalDisclaimer;
