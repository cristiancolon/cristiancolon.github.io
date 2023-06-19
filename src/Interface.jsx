import { Slider } from "@mui/material"
import globalState from "./stores/globalState"


export default function Interface()
{
    const slideTorusX = globalState((state) => state.slideTorusX)
    const slideTorusY = globalState((state) => state.slideTorusY)
    const slideTorusZ = globalState((state) => state.slideTorusZ)
    
    const slideBoxX = globalState((state) => state.slideBoxX)
    const slideBoxY = globalState((state) => state.slideBoxY)
    const slideBoxZ = globalState((state) => state.slideBoxZ)

    const slideLight = globalState((state) => state.slideLight)
    
    return (<>
    <div className="interface">
        <div className="header">Operation Favi is in Fucking Mexico</div>
        <div className="header logo">
            <img src="./goat.png" alt="goat" height="150"></img>
        </div>
        <div className="header subheader">By: Cristián Colón</div>
        <div className="controls">
            <div className="raw">
                <div className="title">Torus Knot Controls</div>
            </div>
            <div className="raw">
                <div className="slider">X-Rotation</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideTorusX(event.target.value * Math.PI/180)}
                    color='secondary'
                />
                </div>
            </div>
            <div className="raw">
                <div className="slider">Y-Rotation</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideTorusY(event.target.value * Math.PI/180)}
                    color='secondary'
                />
                </div>
            </div>
            <div className="raw">
                <div className="slider">Z-Rotation</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideTorusZ(event.target.value * Math.PI/180)}
                    color='secondary'
                />
                </div>
            </div>
            <div className="raw">
                <div className="title"> </div>
            </div>
            <div className="raw">
                <div className="title">Cube Controls</div>
            </div>
            <div className="raw">
                <div className="slider">X-Rotation</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideBoxX(event.target.value * Math.PI/180)}
                />
                </div>
            </div>
            <div className="raw">
                <div className="slider">Y-Rotation</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideBoxY(event.target.value * Math.PI/180)}
                />
                </div>
            </div>
            <div className="raw">
                <div className="slider">Z-Rotation</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideBoxZ(event.target.value * Math.PI/180)}
                />
                </div>
            </div>
        </div>
        <div className="left">
        <div className="raw">
                <div className="title">Light Translation</div>
            </div>
            <div className="raw">
                <div className="slider">Location</div>
                <div className="slider ui">
                <Slider
                    size="medium"
                    min={-180}
                    max={180}
                    step={0.001}
                    defaultValue={0}
                    aria-label="medium"
                    valueLabelDisplay="auto"
                    onChange={(event) => slideLight(event.target.value * Math.PI/180)}
                />
                </div>
            </div>
        </div>
    </div>
    </>)
}