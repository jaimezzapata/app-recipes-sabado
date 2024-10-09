import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div>
            <Header />
            <section className='panel-control'>
                <aside>
                    <nav>
                        <Link to='vegetarian'>Recetas Vegetarianas</Link>
                        <Link to='non-vegetarian'>Recetas No Vegetarianas</Link>
                    </nav>
                </aside>
                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}

export default Dashboard