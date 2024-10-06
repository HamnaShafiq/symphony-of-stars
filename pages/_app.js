import Script from "next/script";
import "@/styles/globals.css";

export default function App({Component, pageProps}) {
    return (
        <>
            <Script
                src="https://typpo.github.io/spacekit/build/spacekit.js"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />;
        </>
    )
}
