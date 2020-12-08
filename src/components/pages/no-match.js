import React from 'react';
import { Link } from 'react-router-dom';

export default function()  {
        return (
            <div>
                <h2>Sorry no match was found</h2>
                <Link to='/'>Return to home page</Link>
            </div>
        );
    }