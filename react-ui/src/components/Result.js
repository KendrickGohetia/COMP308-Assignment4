import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from "react";

//
function Result() {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/run";
  //runs once after the first rendering of page
  useEffect(() => {
    const fetchData = async () => {
      axios.get(apiUrl)
        .then(result => {
          console.log('result.data:',result.data)
          setData(result.data)
          console.log('Data Row2',data.row1)
          setShowLoading(false)
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
      };  
    fetchData();
  }, []);

  return (
    <div>
      { showLoading === false
        ? <div>
            {showLoading && <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner> }
              
            <h1>Prediction Results</h1>
            <h2> the values for species will be:</h2>
            <li>setosa: 1,0,0</li> 
            <li>virginica: 0,1,0</li>
            <li>versicolor: 0,0,1 </li>

            <table border="1" className="App-table">
              <thead>
                <tr>
                  <th>setosa</th>
                  <th>virginica</th>
                  <th>versicolor</th>
                </tr>
              </thead>
              
              <tbody>
                
                <tr>
                  <td className="App-td">
                    {
                    data.row1[0]
                    }
                  </td>

                  <td>
                  {data.row1[1]}
                  </td>

                  <td>
                  {data.row1[2]}
                  </td>
                </tr>
              </tbody>
            </table>

              
          </div>
        : 
        < div>
          {showLoading && <Spinner animation="border" role="status">
            <span className="sr-only">Waiting for results...</span>
          </Spinner> }
        </div>

      }
    </div>

  );
}
//
export default withRouter(Result);
