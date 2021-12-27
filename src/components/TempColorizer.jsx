import React from 'react';

const TempColorizer = ({ temp }) => {
    return (
        <>
            {temp ? (
                <span
                    className={`text-${
                        temp >= 0 ? 'danger' : 'primary'
                    } fw-bold`}
                >
                    {temp}&deg;C
                </span>
            ) : (
                <span>-</span>
            )}
        </>
    );
};

export default TempColorizer;
