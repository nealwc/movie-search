import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const SearchForm = props => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Movie:</Form.Label>
                <Form.Control
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    placeholder="Movie Title"
                />
                <Form.Text className="text-muted">
                    Search the movie you'd like to watch.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={props.handleFormSubmit}>
                Search
            </Button>
        </Form>
    )
}

export default SearchForm