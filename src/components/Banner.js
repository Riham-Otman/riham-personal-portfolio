import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Computer Science Student", "Designer", "Gamer" ];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  return (
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <span className="tagline">Welcome to my Portfolio</span>
                      <h1>
                        {`Hi! I'm Riham `}
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                      </h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      <button onClick={() => window.open('https://www.linkedin.com/in/riham-otman-b12696211/', '_blank')}>
                        Let’s Connect <ArrowRightCircle size={25} />
                      </button>
                    </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}></Col>
          </Row>
        </Container>
      </section>
  );
};
