import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

//
function AddData(props) {
    //
    const [app_data, setAppData] = useState({ sepal_length: '', sepal_width: '', petal_length: '', petal_width: ''});
    const [showLoading, setShowLoading] = useState(false);
    //
    const apiUrl = "http://localhost:3000/adddata"
    //
    const saveCourse = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = {sepal_length: app_data.sepal_length, sepal_width: app_data.sepal_width, petal_length: app_data.petal_length, petal_width: app_data.petal_width};
        //
        axios.post(apiUrl, data)
        .then((result) => {
            setShowLoading(false);
            console.log('results from save course:',result.data)
            props.history.push('/result')

        }).catch((error) => setShowLoading(false));
    };
    //
    const onChange = (e) => {
        e.persist();
        console.log(e.target.value);
        setAppData({...app_data, [e.target.name]: e.target.value});
      }
    
    return (
        <div>
        <h2> Add Data</h2>
        {showLoading && 
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner> 
        } 
        <Jumbotron>
            <Form onSubmit={saveCourse}>
              <Form.Group>
                <Form.Label>Sepal Length</Form.Label>
                <Form.Control type="number" name="sepal_length" id="title" placeholder="Enter Sepal Length" value={app_data.sepal_length} onChange={onChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Sepal Width</Form.Label>
                <Form.Control type="number" name="sepal_width" id="title" placeholder="Enter Sepal Width" value={app_data.sepal_width} onChange={onChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Petal Length</Form.Label>
                <Form.Control type="number" name="petal_length" id="title" placeholder="Enter Petal Length" value={app_data.petal_length} onChange={onChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Petal Width</Form.Label>
                <Form.Control type="number" name="petal_width" id="title" placeholder="Enter Petal Width" value={app_data.petal_width} onChange={onChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Data
              </Button>
            </Form>
          </Jumbotron>
        </div>
    );
}

export default withRouter(AddData);
