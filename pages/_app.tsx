import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import Same from "../components/Same";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<div className="relative w-screen h-screen">
			<Header></Header>
			<Same route={router.route}></Same>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
