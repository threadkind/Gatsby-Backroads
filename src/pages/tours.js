import React, { Component } from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"

export default class tours extends
Component {
	render() {
		return (
			<Layout>hello from tours page!
				<Link to="/">Home</Link>
			</Layout>
		)
	}
}