import './style.css'
import {useFrame} from '@react-three/fiber'
import {useRef, useState} from 'react'
import globalState from './stores/globalState'
import {Sky, Stars, Float, Text, Html, OrbitControls, PivotControls, SoftShadows, useEnvironment, Environment } from '@react-three/drei'
import { Model } from './Model'

export default function Experience()
{
    const directionalLight = useRef()


    const lightLocation = globalState((state) => state.lightLocation)

    useFrame ( (state, deltaTime) =>
    {

    })

    return <>
        <OrbitControls 
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={-0.25}
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

        <directionalLight
            ref={directionalLight}
            castShadow
            position={[lightLocation[0], 2, lightLocation[1]]}
            intensity={1.5}
            shadow-mapSize={[1024*3, 1024*3]}
            shadow-camera-near={0}
            shadow-camera-far={11}
            shadow-camera-top={8}
            shadow-camera-right={8}
            shadow-camera-bottom={-8}
            shadow-camera-left={-8}
        />
        <ambientLight intensity={0.5} />

        {/* <Float
        speed={3}>
            <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            color="#0ab9f9"
            position={[3,0.5,0]}
            rotation-y={45}
            maxWidth={2}
            textAlign="center">
                FaviLand
            </Text>
        </Float> */}

        <Model position={[0,-2,0]} />
        <Stars count={900}/>
    </>
}