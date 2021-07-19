import React from 'react';
import TopNav from '../../components/Navigation/TopNav';
import './styles.scss'

type Props ={
    children: any;
}
const Layout =(props:Props)=>{
    const {children} = props
    return (
        <div className="general-container">
            <TopNav/>
            {children}
        </div>
    )
}

export default Layout