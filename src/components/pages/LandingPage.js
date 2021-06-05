import React, {useEffect} from 'react';
import Landing from '../Landing.js';
import ReactDOM from 'react-dom';
import NavbarComp from '../NavbarComp.js'

function LandingPage () {
    document.title = "Sriabhi's Website"
    return(
        <>
            <NavbarComp />
            <Landing />
        </>
    )
}

export default LandingPage;