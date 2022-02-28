const Section = ({id, title, children}) => {
    return (  
        <div id={id} className={"px-section-side py-section-top h-full"}>
            <h1 className="font-title font-black tracking-wide text-landing-title">{title}</h1>
            {children}
        </div>
    );
}
 
export default Section;