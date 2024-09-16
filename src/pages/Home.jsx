import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Tutors from "../components/Tutors"
import Contact from "../components/Contact"


import '../styles/Home.css'
import { homeSection } from "../data/HomeSection"
import { coursesSection } from "../data/CoursesSection"
import { tutorsSection, tutorList } from "../data/TutorsSection"
import { partnersSection, partnersList } from "../data/PartnersSection"
import { contactSection } from "../data/ContactSection"
import Partners from "../components/Partners"
import parse from 'html-react-parser'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                {/* home */}
                <section id="home">
                    <img src={homeSection.image} alt="Home Section" />
                    <div className="kolom">
                        {parse(homeSection.content)} {/* parse renders text as HTML */}
                    </div>
                </section>

                {/* courses */}
                <section id="courses">
                    <div className="kolom">
                        {parse(coursesSection.content)}
                    </div>
                    <img src={coursesSection.image} alt="Courses Section" />
                </section>

                {/* Tutors */}
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(tutorsSection.content)}
                        </div>
                    </div>
                </section>
            </div>
            <Tutors tutorList={tutorList} />

            {/* Patners */}
            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                        {parse(partnersSection.content)}
                    </div>
                    <Partners partnersList={partnersList} />
                </div>
            </section>
            <Contact contactSection={contactSection} />
            <Footer />
        </>
    )
}
