import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Project(project) {
	const backgroundImg = {
		background: `url(${project.img})`,
		width: '400px',
		height: '300px',
		backgroundSize: 'cover'
	};

	return (
		<Col>
			<Card style={{ maxHeight: '350px', width: '100%', minWidth: '320px' }}>
				<div className="bgImage" style={backgroundImg}></div>
				<Card.Body>
					<Card.Title>{project.title}</Card.Title>
					<Card.Text>{project.text}</Card.Text>
					<Button variant="outline-primary" href={project.link}>
						Go to {project.title}
					</Button>
					{project.repo && (
						<Button variant="outline-primary" href={project.repo}>
							Repository
						</Button>
					)}
				</Card.Body>
			</Card>
		</Col>
	);
}

export default Project;
