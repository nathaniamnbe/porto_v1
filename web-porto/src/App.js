"use client"
import Navbar from "./Navbar"
import "./App.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import nathanImage from "./assets/nathan.JPG"
import kotlin from "./assets/kotlin.png"
import react from "./assets/react.png"
import html from "./assets/html.png"
import css from "./assets/css.png"
import tailwind from "./assets/tailwind.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useRef } from "react" // Pastikan ini sudah di atas, kamu sudah punya useEffect
import mentoring from "./assets/mentoring.jpg"
import minko from "./assets/minko.jpg"
import barber from "./assets/barber.jpg"
import ig from "./assets/ig.png"
import email from "./assets/email.png"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }) // Initialize AOS animation
  }, []) // Empty dependency array to run once on mount

  const sliderRef = useRef(null)

  useEffect(() => {
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(3)
      }, 500) // Adjust timing as necessary
    }
  }, [])

  return (
    <>
      <div id="about"></div>
      <Navbar />
      <div className="container">
        <div className="intro">
          <div className="intro-text">
            <p className="intro1">Hey, I'm Nathan</p>
            <h1 className="intro2">An Informatics student passionate about Front-End, Mobile, and UI/UX</h1>
            <p className="isi1">
              Enthusiastic Informatics student at Multimedia Nusantara University (6th semester) with a passion for
              Front-End, Mobile Development, and UI/UX Design with experience in web and mobile projects. Passionate
              about building high-quality digital products that enhance user experience and solve real-world problems.
            </p>
            <div className="button-container">
              <a href="./assets/NathanaelBernike_CV_2025.pdf" download className="button">
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/nathanaelbernike/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkin"
              >
                LinkedIn
              </a>
            </div>

            <div className="skills-container">
              <div className="tooltip-container">
                <img src={html || "/placeholder.svg"} alt="HTML" className="skill-icon" />
                <div className="tooltip-text">HTML</div>
              </div>

              <div className="tooltip-container">
                <img src={css || "/placeholder.svg"} alt="CSS" className="skill-icon" />
                <div className="tooltip-text">CSS</div>
              </div>

              <div className="tooltip-container">
                <img src={react || "/placeholder.svg"} alt="React" className="skill-icon" />
                <div className="tooltip-text">React</div>
              </div>

              <div className="tooltip-container">
                <img src={kotlin || "/placeholder.svg"} alt="Kotlin" className="skill-icon" style={{ width: "30px" }} />
                <div className="tooltip-text">Kotlin</div>
              </div>

              <div className="tooltip-container">
                <img src={tailwind || "/placeholder.svg"} alt="Tailwind" className="skill-icon" />
                <div className="tooltip-text">Tailwind</div>
              </div>
            </div>
            <div id="web-projects"></div>
          </div>
          <img data-aos="fade-up" src={nathanImage || "/placeholder.svg"} alt="nathan" className="nathan-image" />
        </div>

        <div id="project"></div>

        <h1 className="section-title projects">PROJECTS</h1>
        <div className="project-container">
          <a href="https://mentoring2024.vercel.app/" target="_blank" className="project-card" rel="noreferrer">
            <img src={mentoring || "/placeholder.svg"} alt="Project 1" className="project-image" />
            <div className="project-text">
              <p className="visit-text">Click here to visit</p>
              <h3 className="project-title">MENTORING UMN 2024</h3>
              <p className="project-desc">
                Front-end website for UMN's mentoring event, built with React and responsive design.
              </p>
            </div>
            <span className="arrow">→</span>
          </a>

          <a href="https://minko.vercel.app/" target="_blank" className="project-card" rel="noreferrer">
            <img src={minko || "/placeholder.svg"} alt="Project 2" className="project-image" />
            <div className="project-text">
              <p className="visit-text">Click here to visit</p>
              <h3 className="project-title">Minko | Furniture Store</h3>
              <p className="project-desc">
                An e-commerce UI prototype for a furniture store. Focus on modern aesthetic.
              </p>
            </div>
            <span className="arrow">→</span>
          </a>

          <a
            href="https://github.com/nathaniamnbe/utslab_00000065454"
            target="_blank"
            className="project-card"
            rel="noreferrer"
            id="mobile-projects"
          >
            <img src={barber || "/placeholder.svg"} alt="Project 3" className="project-image" />
            <div className="project-text">
              <p className="visit-text">Click here to visit</p>
              <h3 className="project-title">Cloning Captain Barbershop</h3>
              <p className="project-desc">
                Duplicated the Captain Barbershop application using JavaScript and ExpoGo for a Cross-Platform course
                assignment.
              </p>
            </div>
            <span className="arrow">→</span>
          </a>
        </div>

        <div id="experience"></div>

        <h1 className="section-title experiences-title">EXPERIENCES</h1>

        <h2 className="subsection-title">ORGANIZATIONAL EXPERIENCES</h2>
        <div className="experience-container">
          <div className="experience-card">
            <h3 className="experience-title">Website Developer | CBM UMN 2024</h3>
            <p className="experience-desc">
              <strong>Feb 2024 – Sep 2024</strong>
              <br />• Designed and developed a user-friendly mentoring website with efficient UI/UX and optimized
              front-end performance.
              <br />• Collaborated with the creative team to deliver impactful digital solutions aligned with
              organizational needs.
            </p>
          </div>

          <div className="experience-card">
            <h3 className="experience-title">Maintenance | UMN Radio</h3>
            <p className="experience-desc">
              <strong>Feb 2023 – Dec 2023</strong>
              <br />• Managed the technical aspects of radio broadcasting, including equipment and mixer operation.
              <br />• Operated live broadcasts and coordinated with the production team to ensure smooth on-air
              performance.
            </p>
          </div>

          <div className="experience-card" id="ui-projects">
            <h3 className="experience-title">Photographer | PPIF UMN 2024</h3>
            <p className="experience-desc">
              <strong>Jan 2024 – Sep 2024</strong>
              <br />• Documented the introduction of the Informatics program for new students professionally.
            </p>
          </div>
        </div>

        <div>
          <h2 className="subsection-title">WORK EXPERIENCES</h2>
          <div className="experience-container">
            <div className="experience-card">
              <h3 className="experience-title">Barista | Atas Meja Board Game Cafe</h3>
              <p className="experience-desc">
                <strong>Jun 2024 – Apr 2025</strong>
                <br />• Serving a variety of coffee and non-coffee beverages with high quality standards and friendly
                customer service.
                <br />• Creating a pleasant customer experience through personalized service and attention to detail.
              </p>
            </div>

            <div className="experience-card">
              <h3 className="experience-title">Game Master | Atas Meja Board Game Cafe</h3>
              <p className="experience-desc">
                <strong>Aug 2024 – Apr 2025</strong>
                <br />• Managing gameplay and ensuring players understand the rules for a fun and interactive
                experience.
                <br />• Enhanced communication, time management, and problem-solving skills through this role.
              </p>
            </div>

            <div className="experience-card">
              <h3 className="experience-title">Team Leader | PT CitraDimensi Arthali</h3>
              <p className="experience-desc">
                <strong>Jun 2023 – Apr 2023</strong>
                <br />• Led the booth team at Jakarta Fair 2023, ensuring smooth operations and optimal customer
                service.
                <br />• Coordinated team activities and provided guidance to achieve targets.
              </p>
            </div>
          </div>
        </div>

        <div id="contact"></div>
        <h1 className="section-title contact-section-title">CONTACT</h1>
        <div className="contact-wrapper">
          <h3 className="contact-tittle">Let's Connect!</h3>
          <p className="contact-desc">
            I'm always excited to connect with fellow developers, designers, and anyone passionate about creating
            digital products that make a difference. Whether you're looking for a collaborator, need help with a
            project, or just want to chat about the latest trends in Front-End, Mobile Development, or UI/UX Design, I'm
            here!
          </p>
          <p className="contact-desc">
            If you're interested in discussing how we can work together, or if you have any questions about my
            experience and projects, don't hesitate to reach out. I'm open to freelance opportunities, internships, and
            collaborative projects!
          </p>
          <p className="contact-desc">Feel free to drop me a message or connect through any of the channels below</p>
          <div className="contact-icons">
            <div className="contact-icon-container">
              <a href="https://www.instagram.com/nathann.10/" target="_blank" rel="noopener noreferrer">
                <img src={ig || "/placeholder.svg"} alt="Instagram" className="skill-icon" />
              </a>
            </div>
            <div className="contact-icon-container">
              <a href="mailto:nathanaelbernike@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={email || "/placeholder.svg"} alt="Email" className="skill-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
