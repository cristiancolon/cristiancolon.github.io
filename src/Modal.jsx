import React from "react";
import { Button } from "@mui/material";

export default function Modal({picture, header, message, buttonColor, buttonMessage, open, onClose})
{
    if (!open)
    {
        return null
    }
    return (
        <div className="overlay">
            <div className="modalContainer">
                <img src={picture} alt=""/>
                <div className="modalRight">
                    <div className="content">
                        <h2>{header}</h2>
                        <p>{message}</p>
                    </div>
                    <div className="btnContainer">
                        <Button color={buttonColor} variant="outlined" className="btnPrimary" onClick={onClose}>
                            <span className="bold">{buttonMessage}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}