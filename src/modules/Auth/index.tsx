import React from 'react'
import LoginForm from '../../components/LoginForm'
import './styles.scss'

const Auth:React.FC = () => {
    return (
        <div className="auth">
            <LoginForm />
        </div>
    )
}
export default Auth