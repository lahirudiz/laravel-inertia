import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="" href="/">
                        Home
                    </Link>
                    <Link className="" href="/about">
                        About
                    </Link>
                    <Link className="" href="/post/create">
                        Create
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
