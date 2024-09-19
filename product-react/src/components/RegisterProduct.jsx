import axios from "axios";
import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const RegisterProduct = () => {
    const [product_name, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [eksporti, setEksporti] = useState('');
    const [importi, setImporti] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/products', { product_name, category, eksporti, importi });
            console.log(response.data);
        } catch (error) {
            console.error('Error posting data: ', error);
        }
    };

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.product_name">
                <Form.Label>Emri i Produktit</Form.Label>
                <Form.Control type="text" value={product_name} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.category">
                <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Zgjedh kategorine</option>

                    <option value="ushqimore">Ushqimore</option>
                    <option value="tekstil">Tekstil</option>
                    <option value="teknike">Teknike</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.eksporti">
                <Form.Label>Eksporti</Form.Label>
                <Form.Select aria-label="Default select example" value={eksporti} onChange={(e) => setEksporti(e.target.value)}>
                    <option>Zgjedh shtetin eksportues</option>

                    <option value="Albania">Shqiperia</option>
                    <option value="Kosovo">Kosova</option>
                    <option value="North Macedonia">Maqedonia e Veriut</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.importi">
                <Form.Label>Importi</Form.Label>
                <Form.Select aria-label="Default select example" value={importi} onChange={(e) => setImporti(e.target.value)}>
                    <option>Zgjedh shtetin importues</option>

                    <option value="Germany">Gjermani</option>
                    <option value="Saudite Arabia">Arabia Saudite</option>
                    <option value="Turkey">Turqia</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="danger" type="reset">
                Clear
            </Button>
        </Form>
        </>
    );
};

export default RegisterProduct;