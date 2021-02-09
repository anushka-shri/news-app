import React from 'react';
import { useGlobalContext } from '../Context';
import './buttons.css'
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';



const Buttons = () => {

    const { isLoading, page, nbPages, handlePage } = useGlobalContext();

    return (
        
        <div className="buttons">
            <Button variant="light"
                clasName="button"
                disabled={isLoading}
                onClick={() => handlePage('dec')}>prev</Button>
             &nbsp;
            &nbsp;
            <h5 className="text">{page + 1} of {nbPages}</h5>
             &nbsp;
             &nbsp;
            <Button variant="dark" clasName="button"
             disabled={isLoading}
            onClick={() => handlePage('inc')}>next</Button>{' '}
        </div>
    )

}

export default Buttons;