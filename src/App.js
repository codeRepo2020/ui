import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { useState } from 'react';
import { UserData } from './Data';
import { Chart as ChartJS } from "chart.js/auto"

function App({schemeName}) {
    const [userData, setUserData] = useState({
        labels: schemeName.data.filter((dataV) => dataV.schemeName == schemeName.name).map((time) => time.date),
        datasets: [{
            label: schemeName.name,
            data: schemeName.data.filter((dataV) => dataV.schemeName == schemeName.name).map((time) => time.nav),
            backgroundColor : ["red"]
        }]
    })
    return ( <
        div>
        <div style={{width:700}}>
        <BarChart chartData = { userData }/> </div >
        </div>


    );
}

export default App;