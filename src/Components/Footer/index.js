import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a href="https://abcdeghijk.com">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://abcdeghijk.com">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://abcdeghijk.com">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://abcdeghijk.com">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://abcdeghijk.com">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                
                                    <a href="https://abcdeghijk.com">
                                        <BsYoutube />
                                    </a>
                                </li> 
                            </ul>
                            
                        </Col>
                        
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;