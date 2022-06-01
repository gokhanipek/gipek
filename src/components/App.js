import React from 'react'
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber'
import Octahedron from './RTBobjects/Octahedron';
import Swarm from './RTBobjects/Swarm';
import {socialLinks} from '../utils/constants';
import '../assets/sass/main.scss';
import './app.scss';

function App() {
	const mouseRef = useRef([0, 0])
	const [light, setLight] = useState('#9B00E8');
	
	return (
		<>
			<header id="header">
				<h1>Gokhan Ipek</h1>
				<p>Hi 👋 I am Gokhan, a Frontend Developer based in Karlsruhe, Germany. <br /> You can contact me via:</p>
			</header>
			<footer id="footer">
				<ul className="icons">
					{socialLinks.map(item => <li><a href={item.link} onPointerOver={() => setLight('#1cb495')} onPointerLeave={() => setLight('#9B00E8')} target="_blank" rel="noreferrer" className={`icon ${item.customClass} `}><span className="label">{item.text}</span></a></li> )}
				</ul>
			</footer>
			<div className="bg">
				<Canvas color={'#020207'}>
					<ambientLight />
					<pointLight position={[-10, -10, 10]} />
					<Octahedron position={[1, 1, 0]} color={light} speedX={0.002} speedY={0.002} points={2} scale={1} wireframe={false} />
					<Octahedron position={[1, 1, 0]} color={'#00F1FF'} speedX={-0.005} speedY={-0.005} points={2} scale={2} wireframe={true} />
					<Swarm count={500} mouse={mouseRef} />
				</Canvas>
			</div>
		</>
	);
}

export default App;
