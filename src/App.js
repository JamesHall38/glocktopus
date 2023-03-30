import { useRef, useEffect } from 'react'
import { OrbitControls, Float } from '@react-three/drei'
import Model from './Model'

export default function App() {
    const controls = useRef()

    useEffect(() => {
        controls.current.target.set(0, 4, 0)
        controls.current.maxDistance = 12
        controls.current.minDistance = 8
        controls.current.minAzimuthAngle = -Math.PI / 3
        controls.current.maxAzimuthAngle = Math.PI / 3
        controls.current.minPolarAngle = Math.PI / 3
        controls.current.maxPolarAngle = Math.PI / 1.75
    }, [])

    return (
        <>
            <OrbitControls ref={controls} />
            <ambientLight intensity={0.5} />
            <directionalLight shadow-normalBias={0.04} position={[10, 20, 30]} intensity={1.75} castShadow />
            <Float >
                <Model />
            </Float>
        </>
    )
}
