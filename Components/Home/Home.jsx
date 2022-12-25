import React, { useState } from 'react'
import './home.css'

const Home = () => {
    const [Name, setName] = useState("");
    const [result, setResult] = useState("");
    const [flag, setFlag] = useState(false)
    const youAre = ["Angle", "Extraordinary Person", "Boss", "Rich Person", "Happiest Person", "Lucky Person"]

    const InputHandle = (e) => {
        const name = e.target.value;
        setName(name.toUpperCase())
    }

    const HandleSubmit = () => {
        let ran = Math.floor(Math.random() * 6);
        if (Name === "ANJALI" || Name === "ANJALI NAGWANI") {
            setResult("Princess")
            setFlag(true);
            setName("");
        }
        else if (Name !== "") {
            setResult(youAre[ran]);
            setFlag(true);
            setName("");
        }
        else {
            alert("Please Enter Your Name");
        }
    }

    const BackHandle = ()=>{
        setFlag(false)
    }

    return (
        <div className='Hero'>

            {!flag ?
                <div>
                    <h1>Enter Your Name And I will Tell You Who Are You 🎅</h1>
                    <div className="my-3" style={{ width: "100%" }}>
                        <input className='TextInput' type="text"
                            placeholder='Enter Yout First Name Only'
                            onChange={e => InputHandle(e)}
                            value={Name}
                        />
                        <div className="d-grid gap-2 my-3">
                            <button className="btn btn-danger" type="button" onClick={HandleSubmit}>Submit</button>
                        </div>
                    </div>
                </div> :
                <div>
                    <h1>You are a {result}</h1>
                    <h6>May Your All Dreams Come True.</h6>
                    <h6>Merry Christmas 🎅</h6>
                    <button className="btn btn-danger" type="button" onClick={BackHandle}>Back</button>
                </div>
                
                }
        </div>
    )
}

export default Home