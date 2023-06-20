import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { Canvas } from '@react-three/fiber'
import './style.css'
import { useState } from 'react'
import { MathUtils } from 'three'
import { useRef } from 'react'
import Modal from './Modal.jsx'
import globalState from './stores/globalState.jsx'
import InputModal from './InputModal.jsx'

export default function App()
{
    const modalSettings = globalState((state) => state.modalSettings) 
    const setModalSettings = globalState((state) => state.setModalSettings)

    const inputModalSettings = globalState((state) => state.inputModalSettings)
    const setInputModalSettings = globalState((state) => state.setInputModalSettings)

    return (<>
        <InputModal picture={inputModalSettings[0]}
            header={inputModalSettings[1]} 
            message={inputModalSettings[2]} 
            answers={inputModalSettings[3]}
            open={inputModalSettings[4]} onClose={() => {
                setInputModalSettings([inputModalSettings[0], inputModalSettings[1], inputModalSettings[2], inputModalSettings[3], false])
                setModalSettings([modalSettings[0], modalSettings[1], modalSettings[2], modalSettings[3], modalSettings[4], true])
            }}/>
       
        <Modal picture={modalSettings[0]}
            header={modalSettings[1]} 
            message={modalSettings[2]} 
            buttonColor={modalSettings[3]}
            buttonMessage={modalSettings[4]} 
            open={modalSettings[5]} onClose={() => {setModalSettings([modalSettings[0], modalSettings[1], modalSettings[2], modalSettings[3], modalSettings[4], false])}}/>
        <Canvas className='canvas'
            shadows 
            camera={{ position: [0, 3, 5]}}>
            <Experience />
        </Canvas>
        {/* <Interface /> */}
    </>)
}