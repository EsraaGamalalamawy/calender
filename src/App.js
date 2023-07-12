import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./App.css"

function App() {
    const x = new Date();
    const d = parseInt(x.getDate());
    const m = parseInt(x.getMonth() + 1);
    const y = parseInt(x.getFullYear());

    const defaultFrom = {
        year: y,
        month: m,
        day: d,
    };

    const defaultTo = {
        year: y,
        month: m,
        day: d + 3,
    };

    const defaultRange = {
        from: defaultFrom,
        to: defaultTo,
    };

    const [selectedDayRange, setSelectedDayRange] = useState(
        defaultRange
    );

    const div={
        width: "100px",
        height: "100px",
        background: "linear-gradient(89deg, green, #FFC107)",
        position: "absolute",
        top: "10%",
        right: "-136px",
        borderRadius: "50%",
    }
    const div1={
        width: "95px",
        height: "95px",
        borderRadius: "50%",
        background: "white",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "35px",
        fontWeight: "bold",
        color: "#007580",
    }
    const div2={
        width: "90px",
        height: "12px",
        background: "linear-gradient(91deg, green, #FFC107)",
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
        fontSize: "12px",
    }
    return (
        <div className="out">
            <Calendar
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                colorPrimaryLight="#00000026"
                colorPrimary="#00000026"
                calendarClassName='cele'
                calendarTodayClassName='ctoday'
                inputName='wcl'
                shouldHighlightWeekends />
            <div style={div}>
                <div style={div1}>
                    {m}
                </div>
                <div style={div2}>
                    {y}
                </div>
            </div>

        </div>
    );
}

export default App;