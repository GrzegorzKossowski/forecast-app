import React from 'react';

const ModeDisplay = ({ temps }) => {
    return (
        <>
            {temps ? (
                <span>
                    {temps
                        .map(
                            el => el.toString() + String.fromCharCode(176) + 'C'
                        )
                        .join(', ')}
                </span>
            ) : (
                <span>-</span>
            )}
        </>
    );
};
export default ModeDisplay;
