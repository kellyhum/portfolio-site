// import components
import Meta from "@components/Meta";
import Nav from "@components/Nav";
import Section from "@components/Section";

// import icons
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// import projects
import projectlist from "../utils/projectlist.js";

export default function Home() {
  return (
    <main className="text-default">
      <Meta />

      <Nav />

      <section
        id="landing"
        className="pt-20 min-h-screen flex flex-col justify-evenly items-center lg:px-side"
      >
        <div>
          <h1 className="font-title font-bold text-title text-center pb-8">
            Hi, I'm{" "}
            <span className="landing-name relative dark:before:bg-dark-gold">
              Kelly.
            </span>
          </h1>
          <h1 className="font-title font-bold text-title text-center">
            <span key={1} className="landing-left relative">Developer</span> and{" "}
            <span key={2} className="landing-right relative">puzzle solver.</span>
          </h1>
        </div>

        <KeyboardArrowDownRoundedIcon
          sx={{ fontSize: 80 }}
          className="-mb-32"
        />
      </section>

      <Section id={"about"} title={"I love a good challenge."}>
        <div>
          <p>
            Hey, hi, hello! My name is Kelly - creator of tools, writer of
            words, and homo sapien with a knack for solving jigsaw puzzles (or
            any logical problem, really).
          </p>

          <p>
            My first introduction to the world of code was through a seemingly
            unrelated topic: typing. At the time, my only goal was to become the
            fastest typer in the class - hence, I spent the entire summer
            sitting in front of the computer and learning how to type.
          </p>

          <p>
            Fast forward a few years, and I’ve used that determination to pick
            up Python, Javascript, HTML and CSS. Plus, I’ve gotten the chance to
            test these skills in hackathons, competitions, and projects - like
            XdHacks, picoCTF, and AI4ALL.
          </p>

          <p>
            These days, I’m currently:
            <ul className="list-inside list-disc indent-5">
              <li>
                Creating a monthly newsletter to jot down my thoughts: expect an
                update soon!
              </li>
              <li>Diving into more CTF (capture the flag) competitions</li>
              <li>
                Reading a lot of self-care books: think Atomic Habits by James
                Clear
              </li>
            </ul>
          </p>

          <p>
            If any of these ideas spark your interest, feel free to reach out!
          </p>
        </div>
      </Section>

      <Section id={"projects"} title={"And projects are fun too!"}>
        <p className="mb-8">Check out some of my featured projects!</p>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-1">
          {projectlist.map(({ title, desc, techstack, github, key }) => (
            <div
              className="w-full p-10 border rounded-2xl hover:shadow-projectshadow dark:hover:shadow-projectshadowdark transition-all"
              key={key}
            >
              <h3 className="text-project font-title">{title}</h3>
              <hr className="my-5"></hr>
              <p className="my-3">{desc}</p>
              {techstack.map((tech) => (
                <span className="font-semibold my-3 pr-3">{tech} </span>
              ))}
              <a
                href={github}
                target={"_blank"}
                rel={"noreferrer"}
                className="block pt-3 w-fit underline underline-offset-1 hover:text-cherry dark:hover:text-teal"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id={"contact"}
        title={"Curious? Let's connect!"}
        className="text-center py-20"
      >
        <p className="mb-8">
          My inbox is always open, send me a message and I'll do my best to get
          back to you!
        </p>

        <button className="py-3 px-5 border rounded hover:bg-golden dark:hover:bg-coral dark:hover:bg-opacity-90 transition-all">
          <a href="mailto:kellyhum88@gmail.com">Say Hi</a>
        </button>
      </Section>

      <footer className="text-center py-5">
        <a
          href="https://github.com/kellyhum"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <GitHubIcon
            sx={{
              mx: "0.5rem",
              fontSize: 25,
              color: "#2d2d2b",
              "&:hover": { color: "#9b2226" },
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kellyhum/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <LinkedInIcon
            sx={{
              mx: "0.5rem",
              fontSize: 25,
              color: "#2d2d2b",
              "&:hover": { color: "#9b2226" },
            }}
          />
        </a>
        <a href="mailto:kellyhum88@gmail.com">
          <EmailIcon
            sx={{
              mx: "0.5rem",
              fontSize: 25,
              color: "#2d2d2b",
              "&:hover": { color: "#9b2226" },
            }}
          />
        </a>

        <p className="pt-3 text-footer">
          Designed + Built by Kelly Hum, © 2022
        </p>
      </footer>
    </main>
  );
}
