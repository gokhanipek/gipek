import './assets/sass/main.scss';
function App() {
	return (
		<>
			<header id="header">
				<h1>Gokhan Ipek</h1>
				<p>Hi 👋 I am Gokhan, a Frontend Developer based in Karlsruhe, Germany.</p>
			</header>
			<footer id="footer">
				<ul className="icons">
					<li><a href="https://www.linkedin.com/in/gokhanipek/" target="_blank" rel="noreferrer" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
					<li><a href="https://twitter.com/gipek03" target="_blank" rel="noreferrer" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="https://medium.com/@gokhanipek" target="_blank" rel="noreferrer" className="icon brands fa-medium"><span className="label">Medium</span></a></li>
					<li><a href="https://github.com/gokhanipek" target="_blank" rel="noreferrer" className="icon brands fa-github"><span className="label">Github</span></a></li>
					<li><a href="mailto:g.ipek@outlook.com?subject=Hi Gokhan!" target="_blank" rel="noreferrer" className="icon fa-envelope"><span className="label">Email</span></a></li>
				</ul>
			</footer>
		</>
	);
}

export default App;
