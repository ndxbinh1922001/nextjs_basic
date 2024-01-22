import { EmptyLayout } from "@/layouts/EmptyLayout";
import { AppPropsWithLayout } from "@/models/common";
import { store } from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<Provider store={store}>
			<main className={inter.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</Provider>
	);
}
