import Head from "next/head";
import Script from "next/script";
import { Component } from "react";
import { attributes, react as HomeContent } from "../posts/what-is-js.md";

export default class Home extends Component {
	render() {
		let { title } = attributes;
		return (
			<>
				<Head></Head>
				<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
				<article>
					<h1>{title}</h1>
					<HomeContent />
				</article>
			</>
		);
	}
}
