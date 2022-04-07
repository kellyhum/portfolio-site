const Project = ({title, description}) => {
    return (  
        <div className='flex-1 w-full p-10 border rounded-2xl'>
            <h3 className="text-3xl font-title pb-5">{title}</h3>
            <p className="pb-5">{description}</p>
            <h4 className='font-title'>Next.js | Tailwind</h4>
        </div>
    );
}
 
export default Project;