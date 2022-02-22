import buttonlist from './buttonlist'

const Nav = () => {
    return (  
        <nav className='flex'>
            <div>

            </div>
            
            <ul className='flex list-none'>
                {
                    buttonlist.map((button) => (
                        <li className='p-1.5' key={button.key}>
                            {<a href={button.link}>{button.title}</a>}
                        </li>
                    ))
                }
            </ul>

            <button>
                
            </button>
        </nav>
    );
}
 
export default Nav;