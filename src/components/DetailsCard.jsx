import React from 'react';
import ModeDisplay from './ModeDisplay';
import TempColorizer from './TempColorizer';

const DetailsCard = ({ stats, city }) => {
    return (
        <div className='card mb-3'>
            <div className='card-body'>
                <h5 className='card-title'>{city ? city : `No city`}</h5>
                <div className='card-text'>
                    <div>
                        MinValue: <TempColorizer temp={stats.minTemp} />
                    </div>
                    <div>
                        MaxValue: <TempColorizer temp={stats.maxTemp} />
                    </div>
                    <div>
                        AvgValue: <TempColorizer temp={stats.avgTemp} />
                    </div>
                    <div>
                        ModeValues: <ModeDisplay temps={stats.modeValues} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
