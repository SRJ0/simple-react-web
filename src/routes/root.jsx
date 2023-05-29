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
            <div className="wrap">
                <nav className="lnb">
                    <ul>
                        {pages.map((page) => (
                            <li key={page.id}>
                                <Link to={`pages/${page.id}`}>
                                    Page {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="btn-area">
                        <div className="btn guestbook-btn">
                            <Link to="guestbook">방명록</Link>
                        </div>
                        <div className="btn login-btn">
                            <Link to="login">로그인</Link>
                        </div>
                    </div>
                </nav>
                <main>
                    <div className="content">
                        <Outlet /> 
                    </div>
                </main>
            </div>
        </>
    )
}





