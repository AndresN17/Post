import React from 'react';

export default function Card(props) {
    return (
        <div className="mx-auto mt-6 container w-1/4 rounded-lg shadow-md bg-green-500">
            {props.children}
        </div>
    )
}
