import Carousel from "react-bootstrap/Carousel";
import "./HeroBannerAndFoodCarousel.css"; // replace with the path to your CSS file
import { Col, Container, Row } from "react-bootstrap";
import pancakes from "../imgs/pancake1.jpg";
import recpark from "../imgs/recpark.png";

function HeroBannerAndFoodCarousel() {
  return (
    <Container fluid className="summary-component d-flex responsive-hero">
      <div className="pt-5">
        <Row>
          <Col md={6} className="order-2 order-md-1">
            <div className="text-block">
              <h1 className="h3 h1-md">Raypec's Friday Run And Breakfast</h1>
              <p>
                Every Friday, we at Raypec embark on a challenging run that not
                only tests our physical endurance but also strengthens our team
                spirit. The run is tough, pushing us to our limits, but the
                sense of accomplishment we feel at the end is unparalleled.
              </p>
              <p>
                Raypec's Friday Run and Breakfast is more than a tradition. It's
                a testament to our commitment to fitness, camaraderie, and a
                strong team culture.
              </p>
              <p>
                This app provide an easy way to calculate the ingredients needed for creating pancakes for the breakfast.
              </p>
            </div>
          </Col>
          <Col md={6} className="order-1 order-md-2">
            <Carousel className="">
              <Carousel.Item>
                <img
                  className="d-block w-100 responsive-img"
                  height={400}
                  src={pancakes} // replace with the path to your image
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 responsive-img"
                  height={400}
                  src={recpark} // replace with the path to your image
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default HeroBannerAndFoodCarousel;
