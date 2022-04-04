const Section = ({id, title, children}) => {
    return (  
        <div id={id} className="px-44 h-full w-full">
            <h1 className="font-title font-bold text-5xl">{title}</h1>
            <hr></hr>
            {children}
        </div>
    );
}
 
export default Section;