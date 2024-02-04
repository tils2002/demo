import React, { useState } from "react";

const Home = () => {

    const students = [
        { "rollnumber": 1, "name": "shwet", "marks": 8 },
        { "rollnumber": 2, "name": "Divya", "marks": 50 },
        { "rollnumber": 3, "name": "Ishita", "marks": 60 },
    ]

    const [alldata, setAlldata] = useState(students);
    const [rollnumber, setrollnumber] = useState("");
    const [name, setName] = useState("");
    const [marks, setMarks] = useState("");



    const handleSubmit = (e) => {
       e.preventDefault();
       const obj = { "rollnumber": rollnumber, "name": name, "marks": marks }
       setAlldata(abc => [...abc, obj]);
    }

    return (
        <>
            <table border={2} cellPadding={7} cellSpacing={0}>
                <tr>
                    <th>Roll No</th>
                    <th>name</th>
                    <th>Marks</th>
                </tr>
                {
                    alldata.map(obj => {
                        return (
                            <>
                                <tr>
                                    <td>{obj.rollnumber}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.marks}</td>
                                </tr>
                            </>
                        );
                    })
                }
            </table>
                <br/><br/><br/>
            <form method="POST" onSubmit={handleSubmit}>
                <table border={2} cellPadding={7} cellSpacing={7}>
                    <tr>
                        <td>
                            <label>Roll No:</label>
                        </td>
                        <td>
                            <input type="text" name="rollno" value={rollnumber} placeholder="Enter Your Roll No Here..." onChange={(e) => {setrollnumber(e.target.value);}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Name:</label>
                        </td>
                        <td>
                            <input type="text" name="name" placeholder="Enter Your Name Here..." value={name} onChange={(e) => {setName(e.target.value);}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Marks:</label>
                        </td>
                        <td>
                            <input type="text" name="marks" placeholder="Enter Your Marks Here..." value={marks}  onChange={(e) => {setMarks(e.target.value);}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" name="submit" value="submit"/>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
}

export default Home;