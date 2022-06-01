import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Octahedron = (props) => {
    const ref = useRef()
    useFrame(() => (ref.current.rotation.y += props.speedX, ref.current.rotation.x += props.speedY));

    const args = [1];

    return (
        <mesh
            {...props}
            ref={ref}
            scale={props.scale}
        >
            <octahedronGeometry args={[...args, props.points]} />
            <meshPhongMaterial color={props.color} wireframe={props.wireframe} flatShading={true} />
        </mesh>
    )
}

export default Octahedron;