import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Sphere = (props) => {

    const ref = useRef()
    useFrame(() => (ref.current.rotation.y += props.speedX, ref.current.rotation.x += props.speedY))
    let args = [1];
    
    return (
        <mesh
            {...props}
            ref={ref}
            scale={props.scale}
        >
            <sphereGeometry args={[...args, props.points]} />
            <meshStandardMaterial color={'#FF019A'} wireframe={props.wireframe} flatShading={true} />
        </mesh>
    )
}

export default Sphere;