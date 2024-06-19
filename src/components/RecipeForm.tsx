import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import "./RecipeForm.css";
import { useState } from "react";

function RecipeForm() {
  const maxPancakes = 1000;
  const [pancakes, setPancakes] = useState<number | undefined>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const handleSubmit = async () => {
    setSubmitted(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
    <Form className="recipe-form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="PancakeRange">Number Of Pancakes</Form.Label>
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
  );
}

export default RecipeForm;
