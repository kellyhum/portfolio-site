import TechButton from "./TechButton";

const ProjectCard = ({title, description, blurb, techstack}) => {
    return (  
        <div>
            <img></img>

            <div>
                <h6>{blurb}</h6>
                <h3>{title}</h3>
                <p>{description}</p>
                {
                    techstack.map((stack) => (
                        <TechButton techtitle={stack}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default ProjectCard;