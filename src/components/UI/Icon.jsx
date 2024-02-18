import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Icon({ images }) {
	return (
		<Container
			fluid
			className="text-center mx-auto"
			style={{ maxWidth: '350px' }}
		>
			<Row className="justify-content-left">
				{images.map((image) => (
					<Col key={image.id} className="max-100 cursor-pointer">
						<a href={image.link} target="_blank" rel="noopener noreferrer">
							<div style={{ backgroundColor: 'white', borderRadius: '13px' }}>
								<Image
									src={image.image}
									style={{ width: '100%', height: 'auto' }}
								/>
							</div>
						</a>
					</Col>
				))}
			</Row>
		</Container>
	);
}