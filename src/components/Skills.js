import meter1 from "../assets/img/skill_logos/selenium-logo.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { KeyFill } from "react-bootstrap-icons";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // settings for very large screens
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };    

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                A curated list of technical and interpersonal skills I've
                                developed through academic and professional experiences. These
                                skills showcase my capabilities to design, develop, and
                                innovate across various platforms and tools.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <h5>Java, Python, C#, Golang</h5>
                                </div>
                                <div className="item">
                                    <h5>React, HTML, CSS</h5>
                                </div>
                                <div className="item">
                                    <h5>MySQL, MongoDB, SQL</h5>
                                </div>
                                <div className="item">
                                    <h5>Selenium, JUnit</h5>
                                </div>
                                <div className="item">
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="Background Design"
            />
        </section>
    );
};
