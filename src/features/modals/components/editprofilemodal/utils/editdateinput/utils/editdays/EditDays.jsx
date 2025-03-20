import { useState } from 'react';
import { DropDownSVG } from 'components/icons/DropDownSVG';

const EditDays = ({ day, setDay, maxDays }) => {
    const [isFocusedDay, setIsFocusedDay] = useState(false);

    return (
        <div
            className={`relative mt-4 mr-3 mb-3 flex h-full grow-[2.17] items-center justify-center rounded-[4px] border px-2 py-3 pt-3 pb-2 transition-colors duration-100 ease-in-out ${
                isFocusedDay ? 'border-[#1d9bf0]' : 'border-[#333639]'
            }`}
        >
            <label htmlFor="day"></label>
            <div className="flex h-full justify-between">
                <div
                    className={`absolute top-2 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${
                        isFocusedDay ? 'text-[#1d9bf0]' : 'text-[#71767b]'
                    }`}
                >
                    <span>Day</span>
                </div>
            </div>
            <select
                id="day"
                value={day}
                className="box-border h-full w-full min-w-0 cursor-pointer appearance-none bg-black pt-3 text-[17px] leading-6 text-[#e7e9ea] outline-none"
                onFocus={() => setIsFocusedDay(true)}
                onBlur={() => setIsFocusedDay(false)}
                onChange={(e) => setDay(Number(e.target.value))}
                autoComplete="off"
            >
                <option value=""></option>
                {[...Array(maxDays)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <DropDownSVG className="pointer-events-none absolute top-4 right-3 h-[22.5px] w-[22.5px] transform cursor-pointer text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none" />
        </div>
    );
};

export default EditDays;
