import {jsx} from 'theme-ui';
import React, {useState} from 'react';
import Sticky from 'react-stickynode';
import Navbar from '../components/Navbar/Navbar';


export default function Layout({children}) {
    const [isSticky, setIsSticky] = useState(false);

    const handleStateChange = (status) => {
        if(status.status === Sticky.STATUS_FIXED){
            setIsSticky(true);
        }else if(status.status === Sticky.STATUS_ORIGINAL) {
            setIsSticky(false)
        }
    };

    return (
        <>
        <Sticky innerz={1001} top={0} onStateChange={handleStateChange}>
        <Navbar className={`${isSticky ? 'sticky' : 'unSticky'}`} />
        </Sticky>
        <main id='content'>
            {children}
        </main>
        </>
    )
}