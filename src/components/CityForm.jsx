import React from 'react';

const CityForm = ({ handleSubmit }) => {
    return (
        <form
            className='border rounded p-3 m-3 card-panel'
            onSubmit={handleSubmit}
        >
            <div className='form-floating mb-3'>
                <input
                    type='text'
                    className='form-control'
                    id='city'
                    placeholder='City'
                    required
                />
                <label htmlFor='city'>City</label>
            </div>
            <button className='btn btn-outline-primary'>
                <i className='bi bi-thermometer-sun'></i> Submit
            </button>
        </form>
    );
};

export default CityForm;
