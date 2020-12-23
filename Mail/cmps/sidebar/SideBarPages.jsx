import React from 'react';

function Page1(props) {
    return (
        <div>
            <h1>Page 1</h1>
            <p>I bring the sauce.</p>
        </div>
    );
}

export default Page1;
import React from 'react';

const NotFound = props => {
    return (
        <div>
            <p>You took a wrong turn, mate.</p>
        </div>
    );
};

export default NotFound;