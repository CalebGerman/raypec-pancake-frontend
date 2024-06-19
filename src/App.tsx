import { Container, Row } from "react-bootstrap";
import HomeNav from "./components/HomeNav";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBannerAndFoodCarousel from "./components/HeroBannerAndFoodCarousel";
import RecipeForm from './components/RecipeForm';
import "./App.css";

function App() {
  return (
    <div
      className="home-theme"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <HomeNav />
      <Container fluid className="mt-75 w-100">
        <Row>
          <HeroBannerAndFoodCarousel />
        </Row>
        <Row>
          <RecipeForm />
        </Row>
      </Container>
    </div>
  );
}

export default App;
