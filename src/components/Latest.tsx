interface Props{
  projects: string[]
}

function Latest({projects}: Props) {
  return (
    <>
      {projects.map((project) => (
        <h3> {} </h3>
      ))}
    </>
  );
}

export default Latest;
