import React, { memo } from 'react';

const Div = memo(({ children}) => {
    return (
        <div className=''>
            {children}
        </div>
    );
})

export default Div;



