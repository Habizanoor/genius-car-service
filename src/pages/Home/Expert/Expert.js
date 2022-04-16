import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5'>
            <div className="card " >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
                <button type="button" className="btn btn-primary">Book</button>
            </div>
        </div>


    );
};

export default Expert;