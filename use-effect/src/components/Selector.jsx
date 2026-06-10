import { useState, useEffect } from "react";

function Selector() {
    const [selected, setSelected] = useState("0");
    const [valueSelected, setValueSelected] = useState("");

    const choice = (e) => {
        setSelected(e.target.value);
    }

    useEffect(() => {
        switch(selected) {
            case "0":
                setValueSelected("Java");
                break;
            case "1":
                setValueSelected("OOP");
                break;
            case "2":
                setValueSelected("Spring");
                break;
            case "3":
                setValueSelected("Php");
                break;  
            default:
                setValueSelected("Unknown");
        }
    }, [selected]);

    return (
        <div>
            <label>Khoa hoc: </label>
            <select name="" id="" onChange={choice}>
                <option value="0">Java</option>
                <option value="1">OOP</option>
                <option value="2">Spring</option>
                <option value="3">Php</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    )
}

export default Selector;