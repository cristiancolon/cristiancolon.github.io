import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import globalState from "./stores/globalState";

export default function InputModal({picture, header, message, answers, open, onClose})
{
    const [correct, setCorrect] = useState(null)
    const [info, setInfo] = useState()
    const inputModalSettings = globalState((state)=> state.inputModalSettings)
    const setInputModalSettings = globalState((state)=> state.setInputModalSettings)

    if (!open)
    {
        return null
    }
    return (
        <div className="overlay">
            <div className="modalContainer">
                <img src={picture} alt=""/>
                <div className="modalRight">
                    <div className="closeBtn">
                        <Button className="closeBtn" variant="text" onClick={()=> setInputModalSettings([inputModalSettings[0], inputModalSettings[1], inputModalSettings[2], inputModalSettings[3], false])}>X</Button>
                    </div>
                    <div className="content">
                        <h2>{header}</h2>
                        <p>{message}</p>
                    </div>
                    <div className="btnContainer">
                        <TextField
                            error={correct !== null && !correct}
                            id="outlined-text"
                            label="Answer Here"
                            onChange={(event) => setInfo(event.target.value)}
                            // helperText="Incorrect entry."
                        />
                        <Button color='secondary' variant="outlined" onClick={()=>{
                            console.log(info)
                            if (answers.includes(info))
                            {
                                setCorrect(true)
                                onClose()
                            }
                            else
                            {
                                setCorrect(false)
                            }
                        }}>
                            <span className="bold">Check</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}