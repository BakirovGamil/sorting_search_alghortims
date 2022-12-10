import { Link, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Sorting from './pages/Sorting';

const App = () => {
    return (
        <div className="App">
            <header className='header'>
                <div className="container">
                    <nav className='nav'>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to={'/'}>Алгоритмы сортировки </Link>
                            </li>
                            <li className="nav__item">
                                <Link to={'/search'}>Алгоритмы поиска</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
             <Routes>
                <Route path='/' element={<Sorting/>}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;