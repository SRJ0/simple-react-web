import { Outlet, Link, } from "react-router-dom";
import { getPages } from "../pages";

export default function Root() {
    const pages = getPages();
    return (
        <>
            <header>
                <a href="/">
                    <h1>Welcome to my place</h1>
                </a>
            </header>
            <div id="contents">
                <nav id="lnb">
                    <ul>
                        {pages.map((page) => (
                            <li key={page.id}>
                                <Link to={`pages/${page.id}`}>
                                    Page {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* <div id="guestbook-btn">
                        <Link to="guestbook">방명록</Link>
                    </div> */}
                    <div id="login-btn">
                        <Link to="login">로그인</Link>
                    </div>
                </nav>
                <main>
                    <div id="content">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}





