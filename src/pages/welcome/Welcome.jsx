import { TwitterSVG } from 'components/icons/TwitterSVG';
import GoogleSignUp from './googlesignup/GoogleSignUp';
import AppleSignUp from './applesignup/AppleSignUp';
import CreateAccount from './createaccount/CreateAccount';
import Or from './or/Or';
import LegalDisclaimer from './legaldisclaimer/LegalDisclaimer';
import SignIn from './signin/SignIn';
import WelcomeFooter from './footer/WelcomeFooter';

const Welcome = () => {
    return (
        <main className="flex min-h-screen flex-auto flex-col">
            <div className="flex min-h-auto flex-auto flex-col md:flex-row">
                <div className="flex flex-auto items-center justify-center p-0 md:min-h-[45vh]">
                    <TwitterSVG className=":h-1/2 mr-1 block max-h-22 max-w-full p-6 md:max-h-[428px]" />
                </div>

                <div className="mp-4 mx-auto flex w-auto items-center justify-center md:min-w-[45vw]">
                    <div className="flex w-full flex-col items-center md:max-w-[760px] md:min-w-[437px] md:items-start md:p-5">
                        <div className="my-8 flex min-w-0 text-[#e7e9ea] sm:my-12">
                            <span className="font-twitter font-twitter-bold mb-3 text-4xl tracking-[0.005em] text-wrap break-words md:text-[72px] md:leading-[66px]">
                                Happening <br />
                                now
                            </span>
                        </div>

                        <div className="mb-8 min-w-0 text-2xl font-bold tracking-wide text-[#e7e9ea] md:text-3xl">
                            <span className="font-bold">Join today.</span>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <GoogleSignUp />
                            <AppleSignUp />
                            <Or />
                            <CreateAccount />
                            <LegalDisclaimer />
                            <SignIn />
                        </div>
                    </div>
                </div>
            </div>
            <WelcomeFooter />
        </main>
    );
};

export default Welcome;
