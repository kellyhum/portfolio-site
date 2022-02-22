import buttonlist from './buttonlist'

const Nav = () => {
    return (  
        <nav>
            <div>

            </div>
            
            <ul>
                {
                    buttonlist.map((button) => (
                        <li key={button.key}>
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