var projectData = [];

/**
 * Loads all project data into memory on the load of the website.
 */
function loadProjectData() {
    // if (projectData.length > 0) return Promise.resolve;

    return fetch("content/project-files.json")
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < json.projects.length; i++) {
                projectData[json.projects[i].id] = json.projects[i];
                console.log(projectData[json.projects[i].id].name);
            }
        });
}

/**
 * Loads a specific project into a project container html object.
 *
 * @param {string} projectID
 * @param {string} contentPanelName
 * @returns
 */
function loadProject(projectID, contentPanelName) {
    // console.log("hahaha!!! noo!!!");
    // if (projectData.length <= 0) return false;

    var container;
    var galleries = document.querySelectorAll("div[panel-id]");
    for (var i = 0; i < galleries.length; i++) {
        if (galleries[i].getAttribute("panel-id") == contentPanelName) {
            container = galleries[i];
            break;
        }
    }

    if (container == null) {
        console.log(
            "oops haha no container named " + contentPanelName + " exists"
        );
        return;
    }

    /* Create project panel element

        Structure to be created:
        <div class="fade-in">
            <div class="project-panel">
                <img src="images/debug_image.png">
                <div class="caption">
                    <h3>Deflexion Redux</h3>
                    <p>caption</p>
                </div>
            </div>
        </div>
     */

    var fade = document.createElement("div");
    fade.classList.add("fade-in");

    var panel = document.createElement("div");
    panel.classList.add("project-panel");

    var img = document.createElement("img");
    console.log("id: " + projectID);
    img.src = "images/" + projectData[projectID].thumbnail;

    var text = document.createElement("div");
    text.classList.add("caption");

    var heading = document.createElement("h3");
    heading.textContent = projectData[projectID].name;

    var cap = document.createElement("p");
    cap.textContent = projectData[projectID].caption;

    text.appendChild(heading);
    text.appendChild(cap);

    panel.appendChild(img);
    panel.appendChild(text);

    fade.appendChild(panel);

    container.appendChild(fade);

    return true;
}
