import "../css/header.css"

export function Header() {
    return (
        <header>
            <nav class = "header">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/CV">CV</a>
            </nav>
        </header>
    );
}
