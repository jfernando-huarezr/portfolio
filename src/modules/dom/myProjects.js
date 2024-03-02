const projects = [
  {
    name: "Weather App",
    description: "Weather app using javascript, html, css and webpack",
    img: "./picture-projects/weather.png",
    link: "https://jfernando-huarezr.github.io/weather-app/",
    github: "https://github.com/jfernando-huarezr/weather-app",
  },
  {
    name: "Restaurant Page",
    description: "Restaurant page using html, css, webpack",
    img: "./picture-projects/ichiraku.png",
    link: "https://jfernando-huarezr.github.io/odin-restaurant-page/",
    github: "https://github.com/jfernando-huarezr/odin-restaurant-page",
  },

  {
    name: "Etch a Sketch",
    description: "Game of Etch a Sketch using javascript, html and css",
    img: "./picture-projects/etch.png",
    link: "https://jfernando-huarezr.github.io/etch-a-sketch/",
    github: "https://github.com/jfernando-huarezr/etch-a-sketch",
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
          <a href="${project.github}" target="_blank"
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
