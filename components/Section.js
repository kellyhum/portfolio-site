const Section = ({id, title, children}) => {
    return (  
        <div id={id} className="px-80 h-full w-full">
            <h1 className="font-title font-bold text-5xl">{title}</h1>
            <hr className="my-10 h-2 w-3/4 ml-auto"></hr>
            {children}
        </div>
    );
}
 
export default Section;