import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 const RangePicker = ({setStart, setEnd}) => {
    const [startDate, setStartDate] = useState(new Date("2020/03/04")); 
    const [endDate, setEndDate] = useState(null); //20210307
    
    const convertDate = (date) => {
        console.log(date.toLocaleDateString());
        return date.toLocaleDateString().slice(6,10)+date.toLocaleDateString().slice(3,5)+date.toLocaleDateString().slice(0,2)
    }
    
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);        
    };

    if(endDate !== null) {
        setStart(convertDate(startDate));
        setEnd(convertDate(endDate));
    }

    return (
        <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        />
    );
}


export default RangePicker;