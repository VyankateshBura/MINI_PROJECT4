import React, { useState } from "react";

function Csv() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArray(array);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    let mystyle = {
        display: "flex",
        justifyContent:"center"
    };

    let containerStyle = {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        height: "100vh",
    };

    let formStyle = {
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        width: "500px",
        marginLeft: "510px"
        
    };

    return (
        <div className="my-5"  style={{ textAlign: "center" , containerStyle}}>
            <h3>Upload CSV File </h3>
            <form style={formStyle} >
                <input className="form-control" type={"file"} id={"csvFileInput"} accept={".csv"} onChange={handleOnChange} />
                <button style={mystyle} className="btn btn-dark my-5" onClick={(e) => { handleOnSubmit(e);}}> IMPORT CSV </button>
            </form>
            <br />

            <table>
                <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {array.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Csv