import './style.css'
import {Stars, OrbitControls, SoftShadows} from '@react-three/drei'
import { Model } from './Model'

export default function Experience()
{

    return <>
        <OrbitControls 
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={-0.15}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        enableDamping
        makeDefault
        />
    
        <SoftShadows
        frustum={3.75}
        size={0.005}
        near={9.5}
        samples={17}
        rings={11}
        />

        <ambientLight intensity={0.5} />

        <Model position={[0,-2,0]} />
        
        <Stars count={900}/>
    </>
}