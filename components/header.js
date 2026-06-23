import { useContext } from "react";
import Link from "next/link";
import { Context as HeaderContext } from "../context/headerContext.js";
import { Context as CourseContext } from "../context/courseInfoContext.js";

export default function Header(props) {
    const [{ section, title, icon, iconFamily }] = useContext(HeaderContext);
    const { msLink } = useContext(CourseContext);
    return (
        <header className="navbar">
            <h1 className="navbar-brand">
                <Link href="/">{props.title}</Link>
            </h1>
            <div className="navbar-info">
                {msLink ? (
                    <a href={msLink} className="cta-btn">
                        Missing Semesters
                    </a>
                ) : null}
                {section ? (
                    <h2>
                        {section} &nbsp;{" "}
                        <i
                            className={`${iconFamily || "fa-solid"} fa-${icon}`}
                        />{" "}
                        &nbsp; {title} &nbsp;
                    </h2>
                ) : null}
            </div>
        </header>
    );
}
