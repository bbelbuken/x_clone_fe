import { TwitterSVG } from 'components/icons/TwitterSVG';
import GoogleSignUp from './googlesignup/GoogleSignUp';
import AppleSignUp from './applesignup/AppleSignUp';
import CreateAccount from './createaccount/CreateAccount';
import Or from './or/Or';
import LegalDisclaimer from './legaldisclaimer/LegalDisclaimer';
import SignIn from './signin/SignIn';
import Footer from './footer/footer';

const Welcome = () => {
  return (
    <main className="flex min-h-screen flex-auto flex-col">
      <div className="flex min-h-auto flex-auto">
        <div className="flex min-h-[45vh] flex-auto items-center justify-center p-0">
          <TwitterSVG className="mr-1 h-1/2 max-h-[428px] max-w-full p-6" />
        </div>

        <div className="item center flex min-w-[45vw] items-center justify-center p-4">
          <div className="flex w-full max-w-[760px] min-w-[437px] flex-col p-5">
            <div className="my-12 flex min-w-0 text-[#e7e9ea]">
              <span className="font-twitter font-twitter-bold mb-3 text-[72px] leading-[66px] tracking-[0.005em] break-words">
                Happening now
              </span>
            </div>

            <div className="mb-8 min-w-0 text-3xl font-bold tracking-wide text-[#e7e9ea]">
              <span className="font-bold">Join today.</span>
            </div>

            <div className="flex flex-col">
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
      <Footer />
    </main>
  );
};

export default Welcome;
