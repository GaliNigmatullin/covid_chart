import { useState, useEffect } from 'react';

import {Container, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Chart from '../chart/Chart';
import RangePicker from '../rangePicker/RangePicker';
import ChartInfo from '../chartInfo/ChartInfo'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {    
    const apiURL = 'https://api.covidtracking.com/v1/states/ca/daily.json';
    
    const [chartData, setChartData] = useState([]);
    const [startDate, setStartDate] = useState('20200305'); 
    const [endDate, setEndDate] = useState('20210307');
   
    const fetchData = async (start, end) => {
        const response = await axios.get(apiURL)
        const startIndex = response.data.findIndex(el => el.date == start);
        const endIndex =  response.data.findIndex(el => el.date == end);
        const newChardata = response.data.slice(endIndex, startIndex+1);
        setChartData(newChardata.reverse()) 
    }
    
    useEffect(() => {
        fetchData(startDate, endDate);
    }, [startDate])
    
    const death = chartData.reduce((a,b) => {return a+b.death}, 0);
    const positive = chartData.reduce((a,b) => {return a+b.positive}, 0);
  
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Chart
                            chartData={chartData}/>
                    </Col>
                    <Col>
                        <ChartInfo
                            death={death}
                            positive={positive}/>
                        <RangePicker
                            setStart={setStartDate}
                            setEnd={setEndDate}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
