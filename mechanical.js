const moduleData = {
    module1: {
        title: "Module 1: Introduction to SolidWorks",
        description: "An introduction to SolidWorks software and its interface.",
        price: "Ugx 25,000/=",
        outline: [
            { topic: "Overview of CAD software and its applications in engineering", duration: "1 hour" },
            { topic: "Introduction to SolidWorks interface and basic tools", duration: "1 hour" },
            { topic: "Understanding file types and project setup in SolidWorks", duration: "1 hour" },
            { topic: "Exploring basic components: Sketch, Features, and Assemblies", duration: "1 hour" },
            { topic: "Creating your first part: Simple shapes and modifications", duration: "1 hour" }
        ],
        handsOnProject: {
            title: "Creating a simple part model (e.g., a bracket)",
            duration: "2 hours"
        }
    },
    module2: {
        title: "Module 2: Basic Sketching and Modeling Concepts",
        description: "Introduction to sketching techniques and basic modeling.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Introduction to sketching tools: Lines, Circles, Arcs", duration: "2 hours" },
            { topic: "Applying dimensions and constraints for precise sketches", duration: "2 hours" },
            { topic: "Creating basic 3D models from sketches", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Modeling a simple mechanical component (e.g., a gear)",
            duration: "2 hours"
        }
    },
    module3: {
        title: "Module 3: Advanced Features in SolidWorks",
        description: "Learning advanced modeling techniques.",
        price: "Ugx 45,000/=",
        outline: [
            { topic: "Understanding advanced features: Loft, Sweep, and Fillet", duration: "2 hours" },
            { topic: "Working with assemblies: Mating components effectively", duration: "2 hours" },
            { topic: "Introduction to simulations for stress analysis", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Assembling multiple parts into a functional assembly",
            duration: "2 hours"
        }
    },
    module4: {
        title: "Module 4: Technical Drawings and Documentation",
        description: "Creating technical drawings from models.",
        price: "Ugx 25,000/=",
        outline: [
            { topic: "Generating technical drawings from SolidWorks models", duration: "2 hours" },
            { topic: "Understanding drawing standards and annotations", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Producing a complete technical drawing package for a designed part",
            duration: "2 hours"
        }
    },
    module5: {
        title: "Module 5 : Using Toolbox for Simulations",
        description: "Leveraging SolidWorks Toolbox for efficient design.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Introduction to SolidWorks Toolbox and its components", duration: "1 hour" },
            { topic: "Using Toolbox parts in assemblies", duration: "1 hour" },
            { topic: "Setting up simulations using Toolbox components", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Creating an assembly using Toolbox components and running a basic simulation",
            duration: "3 hours"
        }
    },
    module6: {
        title: "Module 6 : Motion Study in SolidWorks",
        description: "Understanding motion analysis for assemblies.",
        price: "Ugx 20,000/=",
        outline: [
            { topic: "Introduction to Motion Study tools in SolidWorks", duration: "1 hour" },
            { topic: "Setting up motion studies for assemblies", duration: "2 hours" },
            { topic: "Analyzing motion results and optimizing designs", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Creating a motion study for an assembly (e.g., a robotic arm)",
            duration: "3 hours"
        }
    },
    module7: {
        title: "Module 7 : Project-Based Learning",
        description: "Mentoring on a design project of the student's choice.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Developing a project from concept to completion using learned skills", duration: "3 hours" },
            { topic: "Applying design thinking principles in mechanical design", duration: "3 hours" },
            { topic: "Presenting your project to peers for feedback", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Designing a complex assembly or mechanism based on individual interest",
            duration: "4 hours"
        }
    },
    module8: {
        title: "Module 8 : Data Management in CAD",
        description: "Understanding data management techniques in CAD.",
        price: "Ugx 25,000/=",
        outline: [
            { topic: "Managing files and versions in SolidWorks", duration: "2 hours" },
            { topic: "Introduction to PDM systems for collaborative work", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Setting up a simple PDM system for a group project",
            duration: "3 hours"
        }
    },
    module9: {
        title: "Module 9 : Integration of CAD with Other Technologies",
        description: "Exploring integration with manufacturing technologies.",
        price: "Ugx 40,000/=",
        outline: [
            { topic: "Introduction to CNC machining and how CAD fits into the workflow", duration: "2 hours" },
            { topic: "Understanding how SolidWorks integrates with CAM software for machining processes", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Creating a part ready for CNC machining from a SolidWorks model",
            duration: "4 hours"
        }
    },
    module10: {
        title: "Module 10: Advanced Part Modeling Techniques",
        description: "Exploring advanced part modeling techniques, including multibody design and complex shapes.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Multibody design techniques", duration: "2 hours" },
            { topic: "Advanced lofting and sweeping features", duration: "2 hours" },
            { topic: "Creating complex shapes using splines and curves", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Designing a complex part using advanced modeling techniques",
            duration: "4 hours"
        }
    },
    module11: {
        title: "Module 11: Sheet Metal Design",
        description: "Learning to create sheet metal parts and assemblies.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Introduction to sheet metal tools in SolidWorks", duration: "1 hour" },
            { topic: "Creating and modifying sheet metal parts", duration: "2 hours" },
            { topic: "Understanding sheet metal forming tools and conversions", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Creating a sheet metal enclosure for a component",
            duration: "3 hours"
        }
    },
    module12: {
        title: "Module 12: Mold Design Techniques",
        description: "Introduction to mold design principles using SolidWorks.",
        price: "Ugx 40,000/=",
        outline: [
            { topic: "Understanding core and cavity design", duration: "2 hours" },
            { topic: "Creating molds using SolidWorks mold tools", duration: "2 hours" },
            { topic: "Working with non-planar parting lines", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Designing a simple injection mold for a plastic part",
            duration: "4 hours"
        }
    },
    module13: {
        title: "Module 13: SimulationXpress and Basic Simulations",
        description: "Using SimulationXpress for basic simulation tasks.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Introduction to SimulationXpress", duration: "1 hour" },
            { topic: "Setting up basic simulations for stress analysis", duration: "2 hours" },
            { topic: "Interpreting simulation results and reports", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Running a basic stress analysis on a designed part",
            duration: "3 hours"
        }
    },
    module14: {
        title: "Module 14 : Advanced Assembly Techniques",
        description: "Learning advanced techniques for creating complex assemblies.",
        price: "Ugx 40,000/=",
        outline: [
            { topic: "Using advanced mates for assembly constraints", duration: "2 hours" },
            { topic: "Creating sub-assemblies and managing large assemblies", duration: "2 hours" },
            { topic: "Best practices for assembly modeling", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Building a complex assembly with multiple sub-assemblies",
            duration: "4 hours"
        }
    },
    module15: {
        title: "Module 15 : Advanced Surfacing Techniques",
        description: "Understanding advanced surfacing techniques in SolidWorks.",
        price: "Ugx 45,000/=",
        outline: [
            { topic: "Creating complex surfaces using surface modeling tools", duration: "2 hours" },
            { topic: "Repairing imported geometry and creating hybrid models", duration: "2 hours" },
            { topic: "Advanced blending and patching techniques", duration: "2 hours" }
        ],
        handsOnProject: {
            title: "Designing a freeform surface model for an aesthetic product",
            duration: "4 hours"
        }
    }
};


// Function to display module content
function displayModule(module) {
    document.querySelector("#course-title").innerHTML = moduleData[module].title;
    document.querySelector("#course-description").innerHTML = moduleData[module].description;
    document.querySelector("#course-price").innerHTML = "Price: " + moduleData[module].price;

    let outlineRow = "";
    for (let i = 0; i < moduleData[module].outline.length; i++) {
        outlineRow += `<tr><td>${moduleData[module].outline[i].topic}</td><td>${moduleData[module].outline[i].duration}</td></tr>`;
    }
    document.querySelector("#outline-row").innerHTML = outlineRow;

    const handsOnProject = moduleData[module].handsOnProject;
    document.querySelector("#project-title").innerHTML = handsOnProject.title;
    document.querySelector("#project-duration").innerHTML = "Duration: " + handsOnProject.duration;

}

// Event listeners for module buttons
document.querySelector("#module1-btn").addEventListener("click", () => displayModule("module1"));
document.querySelector("#module2-btn").addEventListener("click", () => displayModule("module2"));
document.querySelector("#module3-btn").addEventListener("click", () => displayModule("module3"));
document.querySelector("#module4-btn").addEventListener("click", () => displayModule("module4"));
document.querySelector("#module5-btn").addEventListener("click", () => displayModule("module5"));
document.querySelector("#module6-btn").addEventListener("click", () => displayModule("module6"));
document.querySelector("#module7-btn").addEventListener("click", () => displayModule("module7"));
document.querySelector("#module8-btn").addEventListener("click", () => displayModule("module8"));
document.querySelector("#module9-btn").addEventListener("click", () => displayModule("module9"));
document.querySelector("#module10-btn").addEventListener("click", () => displayModule("module10"));
document.querySelector("#module11-btn").addEventListener("click", () => displayModule("module11"));
document.querySelector("#module12-btn").addEventListener("click", () => displayModule("module12"));
document.querySelector("#module13-btn").addEventListener("click", () => displayModule("module13"));
document.querySelector("#module14-btn").addEventListener("click", () => displayModule("module14"));
document.querySelector("#module15-btn").addEventListener("click", () => displayModule("module15"));

// Initially display the first module
displayModule("module1");

