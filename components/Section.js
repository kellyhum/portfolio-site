const Section = ({id, title, children}) => {
    return (  
        <div id={id} className="px-section-side py-section-top">
            <h1 className="font-title font-black tracking-wider text-5xl">{title}</h1>
            {children}
        </div>
    );
}
 
export default Section;