
import MernProjects from "./MernProjects";

const Projects = () => {
  const data = [
    {
      value: "Projects",
      desc: <MernProjects />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-3 ">
      <h1 className="text-3xl font-bold text-center border-spacing-2 border-b-2 border-b-indigo-600 my-10">
       Web Design Projects and Posters
      </h1>
      {data.map(({ value, desc }) => (
        <div key={value} className="mb-32">
          {desc}
        </div>
      ))}
    </div>
  );
};

export default Projects;
