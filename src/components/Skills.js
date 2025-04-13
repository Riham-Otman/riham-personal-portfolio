import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

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
                                    <h5>MySQL, SQL</h5>
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
