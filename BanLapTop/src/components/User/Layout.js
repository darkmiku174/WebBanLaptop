import React from 'react';
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap';

const Layout = (props) => (
	<>
		<NavigationBar />
		<Container>
			{props.children}
		</Container>
		<Footer />
	</>
)
export default Layout;