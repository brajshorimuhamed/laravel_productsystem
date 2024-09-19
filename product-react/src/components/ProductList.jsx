import axios from "axios";
import React, {useState, useEffect} from "react";
import { Table } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching product data: ', error);
      }
    };

    fetchProducts();
  }, []);

    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Emri i Produktit</th>
          <th>Kategorite</th>
          <th>Eksporti</th>
          <th>Importi</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.product_name}</td>
            <td>{product.category}</td>
            <td>{product.eksporti}</td>
            <td>{product.importi}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    );
};

export default ProductList;