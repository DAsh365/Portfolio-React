import { Form, FloatingLabel, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("example@exampl.com");
  const [name, setName] = useState("asdf");
  const [message, setMessage] = useState("asdf");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValidEmail(isValid);
  }, [email]);

  useEffect(() => {
    setIsValidName(name.trim() !== "");
  }, [name]);

  useEffect(() => {
    setIsValidMessage(message.trim() !== "");
  }, [message]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        console.error(`Something went wrong`);
    }
  };

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className={`mb-3 ${isValidName ? "" : "has-danger"}`}
        style={{ color: "black" }}>
        <Form.Control
          type="text"
          name="name"
          onBlur={handleChange}
          isInvalid={!isValidName}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className={`mb-3 ${isValidEmail ? "" : "has-danger"}`}
        style={{ color: "black" }}>
        <Form.Control
          type="email"
          name="email"
          onBlur={handleChange}
          isInvalid={!isValidEmail}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextArea"
        label="Message"
        className={`mb-3 ${isValidMessage ? "" : "has-danger"}`}
        style={{ color: "black" }}>
        <Form.Control
          as="textarea"
          name="message"
          onBlur={handleChange}
          isInvalid={!isValidMessage}
          style={{ height: "300px" }}></Form.Control>
      </FloatingLabel>
      <Button>Submit!</Button>
    </>
  );
}