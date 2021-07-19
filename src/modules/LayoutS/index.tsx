import React from 'react';
import './styles.scss'

type Props ={
    children: any;
}
const SecondaryLayout =(props:Props)=>{
    const {children} = props
    return (
        <div className="secondary-container">{children}</div>
    )
}

export default SecondaryLayout