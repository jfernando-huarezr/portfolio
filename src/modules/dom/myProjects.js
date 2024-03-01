const projects = [
  {
    name: "Project 1",
    description: "Description 1",
    img: "dummy.jpg",
    link: "www.google.com",
    github: "github.com",
  },
  {
    name: "Project 2",
    description: "Description 2",
    img: "dummy.jpg",
    link: "www.google.com",
    github: "github.com",
  },
];

export default function drawProjects() {
  console.log("whattup");
  const myProjectList = document.querySelector("#myProjects ul");
  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const domProject = document.createElement("li");
    domProject.classList.add("project-card");
    domProject.innerHTML = `
  <div class="project-container">
  <img src="./imgs/${project.img}" alt="dummy" />
  <div class="project-info">
    <div class="main-info">
      <h2>${project.name}</h2>
      <p>
        ${project.description}
      </p>
    </div>
    <ul class="project-links no-bullets">
        <li>
          <a href="${project.link}" target="_blank"
            ><img src="./imgs/social-media/open-in-new.svg" alt="online web"
          /></a>
        </li>
        <li>
          <a href=""${project.github} target="_blank"
            ><img src="./imgs/social-media/github.svg" alt="github"
        / ></a>
        </li>
    </ul>
  </div>
</div>
  `;

    fragment.appendChild(domProject);
  });

  myProjectList.appendChild(fragment);
}
