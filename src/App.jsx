import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { Canvas } from '@react-three/fiber'
import './style.css'
import { useState } from 'react'
import { MathUtils } from 'three'
import { useRef } from 'react'
import Modal from './Modal.jsx'

export default function App()
{
    const [openModal, setOpenModal] = useState(true)
    
    return (<>
        <Modal open={openModal} onClose={() => {
            setOpenModal(false)
            console.log('close')
        }}/>
        <Canvas className='canvas'
            shadows 
            camera={{ position: [0, 3, 5]}}>
            <Experience />
        </Canvas>
        {/* <Interface /> */}
    </>)
}