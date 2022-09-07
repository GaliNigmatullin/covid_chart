import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const Chart = ({chartData}) => {
    return(
        <LineChart
        width={700}
        height={500}
        data={chartData}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="death"
            stroke="#8884d8"
            activeDot={{ r: 2 }}
        />
        <Line type="monotone" dataKey="positive" stroke="#82ca9d" />
    </LineChart>
       
    )
}

export default Chart