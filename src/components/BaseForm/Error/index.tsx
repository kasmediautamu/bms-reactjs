import React from 'react'

 type Props = {
     children: any
     class$:string
 }
function ValidationMessage( props:Props ) {
    const { children,class$ } = props
    return (
        <div className={`${class$}`}>
            {children}
        </div>
    )
}
export default ValidationMessage