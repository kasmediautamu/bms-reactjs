import React from 'react'
import SForm from '../../components/CustomerSearch/searchForm'
import Navigation from '../../components/Navigation/Main'
import Layout from '../LayoutP'
import './styles.scss'

const Home:React.FC = ()=> {
return (
    <div className="home-page">
        <Navigation/>
       
        <div className="layout-right">
            <Layout>
                 <SForm/>
            </Layout>
        </div>
    </div>
)
}

export default Home