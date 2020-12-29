import React from 'react'

import Header from '../shared/Header/header.component' ;
import Footer from '../shared/Footer/footer.component' ;
import Menu from '../../components/Admin_Menu/Menu/menu.jsx'
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <div>
        <>
        <Header/>
        <Menu/>
        
        <Footer/>
       
       
        </>

        </div>
    )
}

export default Layout;