import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/Layout"

const blog = () => {
	return (
		<Layout>Blog page
			<Link to="/">Home</Link>
		</Layout>
	)
}

export default blog