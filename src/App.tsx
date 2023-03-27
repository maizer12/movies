import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { AppDispatch} from './hooks/reduxHooks'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { getLocation } from './store/slices/MoviesSlice'



function App() {
	const location = useLocation()
	const currentPage: string = location.pathname
	const dispatch = AppDispatch()
	useMemo(() => {
		dispatch(getLocation(currentPage.replace('/', '')))
	}, [currentPage])
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/comedy' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
