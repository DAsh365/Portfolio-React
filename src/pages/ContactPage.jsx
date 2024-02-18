import Form from "react-bootstrap/Form";
import ContactForm from "../components/UI/ContactForm";


export default function ContactPage() {
  return (
    <Form style={{ width: "300px" }}>
      <Form.Group>
        <ContactForm />
      </Form.Group>
    </Form>
  );
}