import { Button, Form, InputGroup, Spinner,Container, Row, Col } from "react-bootstrap";
import "./RecipeForm.css";
import { useState } from "react";
import DOMPurify from "dompurify";

function RecipeForm() {
  const maxPancakes = 1000;
  const [pancakes, setPancakes] = useState<number | undefined>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<string>(""); // [
  const [isValid, setIsValid] = useState<boolean>(true);
  const handleSubmit = async () => {
    setSubmitted(true);
    const response = await fetch(
      `https://pancakeraypecxc.azurewebsites.net/PancakeRecipe?num=${pancakes}`
    );
    const sanitizedHTML = DOMPurify.sanitize(await response.text());
    setData(sanitizedHTML);
    setSubmitted(false);
  };

    const handleClear = () => {
      setData("");
      setPancakes(0);
      setSubmitted(false);
    };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.value && !isNaN(Number(event.target.value))) {
      if (Number(event.target.value) <= maxPancakes) {
        setPancakes(event.target.value as unknown as number);
      } else {
        setPancakes(maxPancakes);
      }
      return;
    }
    if (event?.target?.value === "") {
      setPancakes(undefined);
    } else if (isNaN(Number(event.target.value))) {
      setIsValid(false);
    }
    setIsValid(true);
  };
  const btnInternalLoading = () => {
    return (
      <>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="output"
          aria-hidden="true"
        />
        Loading...
      </>
    );
  };
    return (
      <Container fluid className="recipe-form">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="PancakeRange">
                  Number Of Pancakes
                </Form.Label>
                <Form.Range
                  disabled={submitted}
                  max={maxPancakes}
                  value={pancakes}
                  id="PancakeRange"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <InputGroup className="mb-3">
                <Form.Control
                  disabled={submitted}
                  className={isValid ? "" : "invalid-input"}
                  value={pancakes ?? ""}
                  placeholder="Number of Pancakes"
                  onChange={handleInputChange}
                />
                <Button
                  color="primary"
                  id="submit-btn"
                  disabled={submitted || !isValid}
                  onClick={handleSubmit}
                >
                  {submitted ? btnInternalLoading() : "Submit"}
                </Button>
              </InputGroup>
              <br />
              <div className="d-flex justify-content-center align-items-center">
                {submitted ? (
                  <Spinner
                    className="justify-content-center"
                    animation="border"
                    variant="primary"
                  />
                ) : (
                  <></>
                )}
              </div>
            </Form>
          </Col>
          <Col md={3}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="recipe-container">
              {data ? (
                <div
                  className="recipe-output"
                  dangerouslySetInnerHTML={{ __html: data }}
                ></div>
              ) : (
                <></>
              )}
              {data ? (
                <Button
                  variant="secondary"
                  className="recipe-clear-btn"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              ) : (
                <></>
              )}
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    );
}

export default RecipeForm;
