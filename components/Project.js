const Project = ({title, description, techstack}) => {
    return (  
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>
                {
                    techstack.map((item) => (
                        {item}
                    ))
                }
            </h4>
        </div>
    );
}
 
export default Project;