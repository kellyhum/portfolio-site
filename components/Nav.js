import buttonlist from '../public/js/buttonlist'
import toggle from '../public/js/darkmode'

import ModeNightIcon from '@mui/icons-material/ModeNightOutlined';

const Nav = () => {
    return (  
        <div className='w-full h-20 px-44 flex items-center justify-between font-title'>
            <h1 className='font-bold'>KHum</h1>

            <nav className='flex'>            
                <ul className='flex justify-between align-middle font-medium'>
                    {
                        buttonlist.map((button) => (
                            <li key={button.key} className='p-2.5 text-opacity-85'>
                                {<a href={button.link} 
                                className='
                                no-underline
                                hover:underline
                                hover:underline-offset-2'>{button.title}</a>}
                            </li>
                        ))
                    }
                </ul>

                <button onClick={toggle} className='p-2.5 rounded-md hover:bg-golden transition-colors'>
                    <ModeNightIcon /> 
                </button>
            </nav>
        </div>
        
    );
}
 
export default Nav;