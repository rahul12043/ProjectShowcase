let projects = [];

const projectGrid = document.getElementById("projectGrid");

async function loadProjects() {

    const response = await fetch("data/projects.json");

    projects = await response.json();

    displayProjects(projects);

    updateStats();

}

function displayProjects(data) {

    projectGrid.innerHTML = "";

    data.forEach(project => {

        projectGrid.innerHTML += `

        <div class="card">

            <img src="${project.image}" alt="${project.title}">

            <div class="card-body">

                <h2>${project.title}</h2>

                <p><strong>${project.student}</strong></p>

                <p>${project.department}</p>

                <p>${project.summary}</p>

                <div class="tags">

                    ${project.tech.map(t => `<span>${t}</span>`).join("")}

                </div>

                <div class="buttons">

                    <a href="${project.github}" target="_blank">GitHub</a>

                </div>

            </div>

        </div>

        `;

    });

}

function updateStats(){

    document.getElementById("projectCount").textContent = projects.length;

    document.getElementById("studentCount").textContent = projects.length;

    const departments = [...new Set(projects.map(p=>p.department))];

    document.getElementById("departmentCount").textContent = departments.length;

}

loadProjects();