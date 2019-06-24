import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"

export default () => (
	<>
		<Layout >
			<div>Hello world!
				<Link to="/tours">Tours</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</Layout>
	</>
)
