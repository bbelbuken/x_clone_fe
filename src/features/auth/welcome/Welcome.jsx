import { TwitterSVG } from 'components/icons/TwitterSVG';
import { Link } from 'react-router-dom';
import { WelcomeFooterData } from './footerdata/WelcomeFooterData';
import GoogleSignUp from './googlesignup/GoogleSignUp';
import AppleSignUp from './applesignup/AppleSignUp';
import CreateAccount from './createaccount/CreateAccount';
import Or from './or/Or';
import LegalDisclaimer from './legaldisclaimer/LegalDisclaimer';
import SignIn from './signin/SignIn';

const Welcome = () => {
  const date = new Date();
  const year = date.getFullYear();

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

      <div className="">
        <nav className="flex flex-wrap justify-center px-4 py-3">
          {WelcomeFooterData.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="my-1 min-w-0 cursor-pointer pr-[14.5px] text-[13px] leading-4 font-normal tracking-[0.025em] break-words text-[#71767b] hover:underline"
            >
              {item.title}
            </Link>
          ))}
          <span className="my-1 min-w-0 cursor-pointer pr-4 text-[13px] leading-4 font-normal tracking-[0.025em] break-words text-[#71767b] hover:underline">
            &copy; {year} X Corp
          </span>
        </nav>
      </div>
    </main>
  );
};

export default Welcome;
