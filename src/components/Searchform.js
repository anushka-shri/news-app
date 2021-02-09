import React from 'react';
import { useGlobalContext } from '../Context';
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';


const Searchform = () => {

    const {query, handleSearch} = useGlobalContext()
    
    return (
        <div>
        <Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home' className='icon'>
					News App
				</Navbar.Brand>
				<Nav className='mr-auto'></Nav>
				<Form inline className='search-form' >
                    <FormControl type='text' placeholder='Search' className='mr-sm-2'
                         onChange={(e) => handleSearch(e.target.value)}
                    />
                    <Button variant='outline-info'
                     onSubmit={(e) => e.preventDefault()}  >
                        Search
                    </Button>
				</Form>
			</Navbar>
    </div>
    )

}

export default Searchform;

