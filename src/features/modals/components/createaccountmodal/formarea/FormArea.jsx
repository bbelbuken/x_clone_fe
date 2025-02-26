import React from 'react';
import FormHeader from './formheader/FormHeader';
import Inputs from './inputs/Inputs';

const FormArea = ({ handleClose, handleNextSection, step }) => {
    return (
        <div className="absolute top-[24.5%] left-[339px] z-50 mx-auto flex h-auto max-h-[90vh] w-full max-w-[40vw] min-w-[600px] flex-col rounded-2xl bg-black">
            <FormHeader handleClose={handleClose} step={step} />

            <div className="mt-[5px] flex h-full flex-1 flex-col px-20">
                <div className="my-4">
                    <h1 className="min-w-0 text-[31px] leading-9 font-bold text-[#e7e9ea]">
                        Create your account
                    </h1>
                </div>
            </div>

            <Inputs handleNextSection={handleNextSection} />
        </div>
    );
};

export default FormArea;
