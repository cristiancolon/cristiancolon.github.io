import React from "react";
import fotoJuntos from "/fotoJuntos.jpeg"
import { Button } from "@mui/material";
export default function Modal({open, onClose})
{
    if (!open)
    {
        return null
    }
    return (
        <div className="overlay">
            <div className="modalContainer">
                <img src={fotoJuntos} alt=""/>
                <div className="modalRight">
                    <div className="content">
                        <h2>Saludos Srta. Favianna,</h2>
                        <p>Como no me encuentro con usted en este día tan especial, le hice un pequeño regalo. Un virtual scavenger hunt.</p>
                    </div>
                    <div className="btnContainer">
                        <Button color="secondary" variant="outlined" className="btnPrimary" onClick={onClose}>
                            <span className="bold">Good Luck y Happy Bday ♡</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}