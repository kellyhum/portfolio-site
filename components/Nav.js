import buttonlist from '../public/js/buttonlist'
import toggle from '../public/js/darkmode'

import ModeNightIcon from '@mui/icons-material/ModeNight';

const Nav = () => {
    return (  
        <nav className='text-nav flex items-center justify-between px-14 py-8'>
            <div>
                <h1>KHum</h1>
            </div>
            
            <ul className='flex list-none ml-auto mr-10'>
                {
                    buttonlist.map((button) => (
                        <li className='mx-4 px-4 py-1 rounded-lg text-l hover:underline duration-100' key={button.key}>
                            {<a href={button.link}>{button.title}</a>}
                        </li>
                    ))
                }
            </ul>

            <button onClick={toggle} className='p-2 rounded-lg text-caramel bg-caramel/30 dark:bg-beige/30 dark:text-beige'>
                <ModeNightIcon />
            </button>
        </nav>
    );
}
 
export default Nav;