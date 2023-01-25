import Head from "next/head";
import Link from "next/Link";
import React from "react";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title + ' - Nouher' : 'Nouher'}</title>
                <meta name="description" content="nouher website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className="flex h-12 px-4 justify-between items-center shadow-md">
                        <Link href="/">
                            <span className="text-red-600">Nouher</span>
                        </Link>
                        <div>
                            <Link href="/Cart">
                                <span className="p-2">Cart</span>
                            </Link><Link href="/Login">
                                <span className="p-2">Login</span>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="container m-auto mt-4 px-4">{children}</main>
                <footer className="flex h-10 justify-center items-center shadow-inner">Copyright © 2023 Nouher</footer>
            </div>
        </>
    );
}