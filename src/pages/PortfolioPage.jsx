import ThePlug from '../assets/theplug.png';
import CharacterQuiver from '../assets/characterquiver.png';
import Readify from '../assets/book.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Project from '../components/UI/Project';

function PortfolioPage() {
	const projects = [
		{
			id: 1,
			img: ThePlug,
			text: '',
			title: 'The Plug',
			link: 'https://sleepy-bayou-35337-4939ad58a73e.herokuapp.com/',
			repo: 'https://github.com/Krich2022/The_Plug',
		},
		{
			id: 2,
			img: CharacterQuiver,
			text: '',
			title: 'Character Quiver', 
			link: 'https://character-quiver.onrender.com/',
			repo: 'https://github.com/Krich2022/character-quiver',
		},
		{
			id: 3,
			img: Readify,
			text: '',
			title: 'Readify',
			link: 'https://readify-cf4n.onrender.com',
			repo: 'https://github.com/DAsh365/Readify',
		}
	];

	return (
		<Container className="align-items-center">
			<Row xs={1} sm={2} md={3}>
				{projects.map((project) => (
					<div key={project.id} className="col-auto px-2 py-2">
						<Project {...project} />
					</div>
				))}
			</Row>
		</Container>
	);
}

export default PortfolioPage;