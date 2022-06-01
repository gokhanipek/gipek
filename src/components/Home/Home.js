import React from 'react'

export const Home = () => {
    //better to add state management and get it from store
    const [light, setLight] = useState('#9B00E8');

    return (
        <>
            <header id="header">
                <h1>Gokhan Ipek</h1>
                <p>Hi 👋 I am Gokhan, a Frontend Developer based in Karlsruhe, Germany. <br /> You can contact me via:</p>
            </header>
            <footer id="footer">
                <ul className="icons">
                    <li><a href="https://www.linkedin.com/in/gokhanipek/" onPointerOver={() => setLight('#1cb495')} onPointerLeave={() => setLight('#9B00E8')} target="_blank" rel="noreferrer" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
                    <li><a href="https://twitter.com/gipek03" onPointerOver={() => setLight('#1cb495')} onPointerLeave={() => setLight('#9B00E8')} target="_blank" rel="noreferrer" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://medium.com/@gokhanipek" onPointerOver={() => setLight('#1cb495')} onPointerLeave={() => setLight('#9B00E8')} target="_blank" rel="noreferrer" className="icon brands fa-medium"><span className="label">Medium</span></a></li>
                    <li><a href="https://github.com/gokhanipek" onPointerOver={() => setLight('#1cb495')} onPointerLeave={() => setLight('#9B00E8')} target="_blank" rel="noreferrer" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    <li><a href="mailto:g.ipek@outlook.com?subject=Hi Gokhan!" onPointerOver={() => setLight('#1cb495')} onPointerLeave={() => setLight('#9B00E8')} target="_blank" rel="noreferrer" className="icon fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </footer>
        </>
    )
}
