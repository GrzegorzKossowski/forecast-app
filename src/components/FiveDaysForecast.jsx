import React from 'react';
import TempColorizer from './TempColorizer';

const FiveDaysForecast = ({ forecast }) => {
    return (
        <ul className='list-group list-group-flush w-50'>
            {forecast &&
                forecast.map(el => (
                    <li
                        className='list-group-item d-flex justify-content-between align-items-start'
                        key={el.id}
                    >
                        <div className='ms-2 me-auto'>
                            <div>
                                <span className='fw-bold'>Day:</span> {el.day}{' '}
                                <span className='fw-bold'>Hrs:</span> {el.hour}
                            </div>
                            <TempColorizer temp={el.temp} />
                        </div>
                        <span className='badge bg-primary rounded-pill'>
                            H: {el.humidity}%
                        </span>
                    </li>
                ))}
        </ul>
    );
};

export default FiveDaysForecast;
