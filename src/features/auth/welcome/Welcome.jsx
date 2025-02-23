import { TwitterSVG } from 'components/icons/TwitterSVG';
import { Link } from 'react-router-dom';
import { WelcomeFooterData } from './footerdata/WelcomeFooterData';
import Button from 'components/buttons/Button';

const Welcome = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <main className="flex min-h-screen flex-auto flex-col">
      <div className="flex min-h-auto flex-auto">
        <div className="flex min-h-[45vh] flex-auto items-center justify-center p-0">
          <TwitterSVG className="mr-1 h-1/2 max-h-[428px] max-w-full p-6" />
        </div>

        <div className="item center flex min-w-[45vw] justify-center p-4">
          <div className="flex w-full max-w-[760px] min-w-[437px] flex-col p-5">
            <div className="my-12 flex min-w-0 text-[#e7e9ea]">
              <span className="font-twitter font-twitter-bold text-[72px] leading-[77px] break-words">
                Happening now
              </span>
            </div>

            <div className="mb-8 min-w-0 text-3xl font-bold text-[#e7e9ea]">
              <span>Join today.</span>
            </div>

            <div className="flex flex-col">
              <div className="mb-2 flex h-[40px] w-[300px] items-center justify-center rounded-[20px] bg-[#e7e9ea]">
                <Button
                  title="Google ile Oturum Açma Düğmesi"
                  className="flex h-11 w-80 items-center justify-center border-0"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    height={18}
                    width={18}
                    fill="currentColor"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-black">
                    Sign Up With Google
                  </span>
                </Button>
              </div>

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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
