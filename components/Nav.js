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
                                className='inline-block relative 
                                before:content-none 
                                before:absolute 
                                before:left-0
                                before:bottom-0
                                before:w-0 
                                before:h-1
                                before:bg-black
                                hover:before:w-full'>{button.title}</a>}
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