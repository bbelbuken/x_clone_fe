import { MoonLoader } from 'react-spinners';

const LoadingSpinner = ({ size = 50, className = '' }) => {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c] transition-opacity duration-300 ${className}`}
        >
            <MoonLoader color="#1d9bf0" size={size} />
        </div>
    );
};

export default LoadingSpinner;
