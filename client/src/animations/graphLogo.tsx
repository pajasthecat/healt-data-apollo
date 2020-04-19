import React from 'react'
import './graphLogo.css'

const AnimatedLogo: React.FunctionComponent = () => {
    return (
        <svg
            id="Layer_Top"
            height="50"
            viewBox="0 0 192 192"
            width="512" xmlns="http://www.w3.org/2000/svg">
            <path id="Layer_Axis" d="m16 176v-136h-16v144a8 8 0 0 0 8 8h184v-16z" />
            <path id="Layer_One" d="m72 112a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v56h40z" />
            <path id="Layer_Two" d="m128 80a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v88h40z" />
            <path id="Layer_Three" d="m184 48a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v120h40z" />
        </svg>
    );
}



export default AnimatedLogo;