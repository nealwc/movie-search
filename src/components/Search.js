import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const Search = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Movie:</Form.Label>
                    <Form.Control type="email" placeholder="Movie Title" />
                    <Form.Text className="text-muted">
                        Search the movie you'd like to watch.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Container>
    )
}

export default Search