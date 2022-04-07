const Section = ({id, title, children}) => {
    return (  
        <section id={id} className="px-side py-20 w-full">
            <h1 className="font-title font-bold text-5xl">{title}</h1>
            <hr className="my-10 w-3/4 ml-auto"></hr>
            {children}
        </section>
    );
}
 
export default Section;