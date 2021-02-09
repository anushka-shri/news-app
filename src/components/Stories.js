import React, { useContext } from 'react';
import { useGlobalContext } from '../Context';
import './stories.css'
import { Navbar, Nav, Form, FormControl, Button,Card } from 'react-bootstrap';

const Stories = () => {
	const { isLoading, hits } = useGlobalContext();

	if (isLoading) {
		return <div className='loading'></div>;
	}
	return (
		<section className='stories'>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>News</Navbar.Brand>
				<Nav className='mr-auto'></Nav>
				<Form inline>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-info'>Search</Button>
				</Form>
			</Navbar>
			{hits.map((story) => {
				const { objectID, title, num_comments, url, points, author } = story;

				return (
					<article className='story' key={objectID}>
						<Card border='primary' style={{ width: '25rem' }}>
							<Card.Header>{title}</Card.Header>
							<Card.Body>
								<Card.Text>
									<p>
										{points} by {author}
									</p>
									<span>{num_comments} comments </span>
								</Card.Text>
								<div>
									<a href={url} target='_blank'>
										Read More
									</a>
									<button>remove</button>
								</div>
							</Card.Body>
						</Card>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
