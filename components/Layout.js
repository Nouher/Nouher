import { Store } from "@/utils/Store";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Header from "./Header";

export default function Layout({ title, children }) {
    const { state, dispatch } = useContext(Store)
    const { cart } = state;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>{title ? title + ' - Nouher' : 'Nouher'}</title>
                <meta name="description" content="nouher website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <Header />
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">Copyright © 2023 Nouher</footer>
            </div>
        </>
    );
}