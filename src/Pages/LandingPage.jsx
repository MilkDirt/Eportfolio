import "../css/LandingPage.css"
import image from "../assets/image.png"

export function LandingPage () {
 return (
    <main id="main_page">

        <div id="welcome"> 
            <h1>Welcome to my page!</h1>

        </div>

        <section id="info_section">
        <div id="intro">
            <h1>Melkior Nergaard</h1>
        </div>

        <div>
            <img src={image} alt="Melkior Nergaard" />
        </div>
        </section>

        <div id="about">
            <h2>About</h2>
            <p>Hei jeg er Melkior....</p>
        </div>

        <div id="projects_section">
            <h2>Projects</h2>

            <div id="project_display">

            </div>
        </div>

    </main>
)
}