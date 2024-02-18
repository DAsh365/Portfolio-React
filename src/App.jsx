import { Outlet } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<Header />
			<Background>
				<Outlet />
				<Footer />
			</Background>
		</>
	);
}