import React from 'react'
import { useRef, useState } from 'react';
import polyfill, {ResizeObserver} from "@juggle/resize-observer"
import { Canvas } from '@react-three/fiber'
import Octahedron from './RTBobjects/Octahedron';
import Swarm from './RTBobjects/Swarm';

export const Background = () => {
    const mouseRef = useRef([0, 0])
	const [light, setLight] = useState('#9B00E8');
	const [ref, bounds] = useMeasure({ polyfill: ResizeObserver })

    return (
        <div className="bg">
            <Canvas resize={{ polyfill }} color={'#020207'}>
                <ambientLight />
                <pointLight position={[-10, -10, 10]} />
                <Octahedron position={[1, 1, 0]} color={light} speedX={0.002} speedY={0.002} points={2} scale={1} wireframe={false} />
                <Octahedron position={[1, 1, 0]} color={'#00F1FF'} speedX={-0.005} speedY={-0.005} points={2} scale={2} wireframe={true} />
                <Swarm count={500} mouse={mouseRef} />
            </Canvas>
        </div>
    )
}
