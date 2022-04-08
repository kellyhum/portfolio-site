const Project = ({title, description}) => {
    return (  
        <div className='w-full p-10 border rounded-2xl hover:shadow-projectshadow transition-all'>
            <h3 className="text-3xl font-title">{title}</h3>
            <hr className="my-5"></hr>
            <p>{description}</p>
            <h4 className='font-semibold my-3'>Next.js | Tailwind</h4>
            <a className="underline underline-offset-1 hover:text-coral transition-colors">Github</a>
        </div>
    );
}
 
export default Project;