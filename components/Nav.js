import buttonlist from './buttonlist'

import ModeNightIcon from '@mui/icons-material/ModeNight';

const Nav = () => {
    return (  
        <nav className='flex items-center justify-between px-8 py-8'>
            <div>

            </div>
            
            <ul className='flex list-none'>
                {
                    buttonlist.map((button) => (
                        <li className='mx-4 px-4 py-1 font-title text-beige hover:bg-caramel/50 hover:rounded-lg transition duration-75' key={button.key}>
                            {<a href={button.link}>{button.title}</a>}
                        </li>
                    ))
                }
            </ul>

            <button className='p-2 rounded-lg'>
                <ModeNightIcon />
            </button>
        </nav>
    );
}
 
export default Nav;