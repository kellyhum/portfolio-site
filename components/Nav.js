import buttonlist from '../public/js/buttonlist'

import ModeNightIcon from '@mui/icons-material/ModeNight';

const Nav = () => {
    return (  
        <nav className='font-title flex items-center justify-between px-14 py-8'>
            <div>
                <h3>KHum</h3>
            </div>
            
            <ul className='flex list-none ml-auto mr-10'>
                {
                    buttonlist.map((button) => (
                        <li className='mx-4 px-4 py-1 rounded-lg text-l hover:underline-offset-1 duration-100' key={button.key}>
                            {<a href={button.link}>{button.title}</a>}
                        </li>
                    ))
                }
            </ul>

            <button className='p-2 rounded-lg bg-caramel/30'>
                <ModeNightIcon />
            </button>
        </nav>
    );
}
 
export default Nav;