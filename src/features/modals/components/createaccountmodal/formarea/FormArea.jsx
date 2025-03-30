import React from 'react';
import FormHeader from './formheader/FormHeader';
import Inputs from './inputs/Inputs';
import { memo } from 'react';

const FormArea = memo(
    ({
        handleClose,
        handleNextSection,
        step,
        name,
        setName,
        email,
        setEmail,
        month,
        setMonth,
        day,
        setDay,
        year,
        setYear,
    }) => {
        return (
            <div className="z-50 mx-auto flex min-h-[568px] w-full flex-col rounded-2xl bg-black sm:absolute sm:h-auto sm:max-h-[90vh] sm:max-w-[20vw] sm:min-w-[600px]">
                <FormHeader handleClose={handleClose} step={step} />

                <div className="mt-[5px] flex flex-col px-3 sm:px-20">
                    <div className="my-1 sm:my-4">
                        <h1 className="min-w-0 text-[24px] leading-9 font-bold text-[#e7e9ea] sm:text-[31px]">
                            Create your account
                        </h1>
                    </div>
                </div>

                <Inputs
                    handleNextSection={handleNextSection}
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
            </div>
        );
    },
);

FormArea.displayName = 'FormArea';
export default FormArea;
