import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>nouher</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <header>header</header>
                <main>{children}</main>
                <footer>footer</footer>
            </div>
        </>
    );
}