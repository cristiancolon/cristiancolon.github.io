import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'
import './style.css'
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
                setModalSettings([modalSettings[0], modalSettings[1], modalSettings[2], modalSettings[3], modalSettings[4], true, modalSettings[6]])
            }}/>
       
        <Modal picture={modalSettings[0]}
            header={modalSettings[1]} 
            message={modalSettings[2]} 
            buttonColor={modalSettings[3]}
            buttonMessage={modalSettings[4]} 
            open={modalSettings[5]} onClose={() => {
                setModalSettings([modalSettings[0], modalSettings[1], modalSettings[2], modalSettings[3], modalSettings[4], false, modalSettings[6]])
                if (modalSettings[6])
                {
                    // using Java Script method to get PDF file
                    fetch('/Confidential.pdf').then(response => {
                        response.blob().then(blob => {
                        // Creating new object of PDF file
                        const fileURL = window.URL.createObjectURL(blob);
                        // Setting various property values
                        let alink = document.createElement('a');
                        alink.href = fileURL;
                        alink.download = '/Confidential.pdf';
                        alink.click();
                        })
                    })
                }
            }}/>
        <Canvas className='canvas'
            shadows 
            camera={{ position: [0, 3, 5]}}>
            <Experience />
        </Canvas>
    </>)
}