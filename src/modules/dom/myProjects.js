const projects = [
  {
    name: "Project 1",
    description: "Description 1",
    img: "dummy.jpg",
    link: "www.google.com",
  },
  {
    name: "Project 2",
    description: "Description 2",
    img: "dummy.jpg",
    link: "www.google.com",
  },
];

export default function drawProjects() {
  console.log("whattup");
  const myProjectList = document.querySelector("#myProjects ul");
  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const domProject = document.createElement("li");
    domProject.innerHTML = `
  <div class="project-container">
  <img src="./imgs/${project.img}" alt="dummy" />
  <h2>${project.name}</h2>
  <p>
    ${project.description}
  </p>
</div>
  `;

    fragment.appendChild(domProject);
  });

  myProjectList.appendChild(fragment);
}
