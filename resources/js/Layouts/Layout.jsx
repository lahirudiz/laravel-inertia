import {Link} from "@inertiajs/react";

export default function Layout({children}) {
    return (
        <>
        <header>
            <nav>
                <Link className="" href="/">Home</Link>
                <Link className="" href="/about">About</Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}