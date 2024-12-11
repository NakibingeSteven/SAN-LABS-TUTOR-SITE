const moduleData = {
    module1: {
        title: "Module 1: Introduction to PCB Design with Fritzing",
        description: "An overview of PCB design principles and the Fritzing software.",
        price: "Ugx 25,000/=",
        outline: [
            { topic: "Basics of PCB design and applications in electronics", duration: "1 hour" },
            { topic: "Introduction to Fritzing interface and tools", duration: "1 hour" },
            { topic: "Overview of components library in Fritzing", duration: "1 hour" }
        ],
        handsOnProject: { title: "Creating a simple circuit using breadboard view", duration: "2 hours" }
    },
    module2: {
        title: "Module 2: Building Circuits in Fritzing",
        description: "Learn to build and visualize circuits using Fritzing.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Adding components to the breadboard layout", duration: "2 hours" },
            { topic: "Making connections with wires and understanding circuit flow", duration: "2 hours" },
            { topic: "Switching between breadboard, schematic, and PCB views", duration: "2 hours" }
        ],
        handsOnProject: { title: "Design a basic LED circuit with a switch", duration: "2 hours" }
    },
    module3: {
        title: "Module 3: Schematic Design in Fritzing",
        description: "Transitioning from physical layouts to schematic representations.",
        price: "Ugx 45,000/=",
        outline: [
            { topic: "Creating a schematic from the breadboard layout", duration: "2 hours" },
            { topic: "Understanding symbols and connections in schematics", duration: "2 hours" },
            { topic: "Best practices for schematic organization and clarity", duration: "2 hours" }
        ],
        handsOnProject: { title: "Convert the LED circuit into a schematic diagram", duration: "2 hours" }
    },
    module4: {
        title: "Module 4: Designing PCBs in Fritzing",
        description: "Finalizing designs for manufacturing using Fritzing's PCB view.",
        price: "Ugx 25,000/=",
        outline: [
            { topic: "Arranging components on the PCB layout for optimal space utilization", duration: "2 hours" },
            { topic: "Routing traces between pads and understanding design rules", duration: "2 hours" },
            { topic: "Exporting Gerber files for manufacturing", duration: "1 hour" }
        ],
        handsOnProject: { title: "Create a PCB layout from the previously designed schematic", duration: "3 hours" }
    },
    module5: {
        title: "Module 5 : Introduction to KiCad",
        description: "Familiarization with KiCad's interface and capabilities.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Overview of KiCad features and tools", duration: "1 hour" },
            { topic: "Setting up a new project in KiCad", duration: "1 hour" }
        ],
        handsOnProject: { title: "Create your first project in KiCad", duration: "2 hours" }
    },
    module6: {
        title: "Module 6 : Schematic Capture in KiCad",
        description: "Creating detailed schematics using KiCad.",
        price: "Ugx 35,000/=",
        outline: [
            { topic: "Placing components from libraries onto the schematic editor", duration: "2 hours" },
            { topic: "Connecting components with wires and defining electrical rules", duration: "2 hours" }
        ],
        handsOnProject: { title: "Design a simple circuit schematic in KiCad", duration: "3 hours" }
    },
    module7: {
        title: "Module 7 : Symbol Design in KiCad",
        description: "Learning how to create custom symbols for components.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Understanding symbol attributes and pin configuration", duration: "1 hour" },
            { topic: "Creating new symbols using KiCad's symbol editor", duration: "2 hours" }
        ],
        handsOnProject: { title: "Design a custom symbol for a unique component", duration: "3 hours" }
    },
    module8: {
        title: "Module 8 : Footprint Creation in KiCad",
        description: "Designing footprints for PCB components in KiCad.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Understanding footprint dimensions and pad layout", duration: "1 hour" },
            { topic: "Using the footprint editor to create custom footprints", duration: "2 hours" }
        ],
        handsOnProject: { title: "Create a footprint for a custom component", duration: "3 hours" }
    },
    module9: {
        title: "Module 9 : PCB Layout Techniques in KiCad",
        description: "Learning advanced techniques for arranging components on PCBs.",
        price: "Ugx 40,000/=",
        outline: [
            { topic: "Managing component placement for signal integrity and manufacturability", duration: "2 hours" },
            { topic: "Routing traces effectively while adhering to design rules", duration: "2 hours" }
        ],
        handsOnProject: { title: "Design a complex PCB layout with multiple components", duration: "4 hours" }
    },
    module10: {
        title: "Module 10 : Design Rule Checks (DRC)",
        description: "Ensuring design integrity through DRC processes.",
        price: "Ugx 20,000/=",
        outline: [
            { topic: "Running DRCs to identify potential issues before manufacturing", duration: "1 hour" },
            { topic: "Understanding common DRC errors and how to fix them", duration: "1 hour" }
        ],
        handsOnProject: { title: "Perform DRC on your PCB design and resolve issues found", duration: "3 hours" }
    },
    module11: {
        title: "Module 11 : Generating Gerber Files in KiCad",
        description: "Preparing designs for manufacturing by generating necessary files.",
        price: "Ugx 25,000/=",
        outline: [
            { topic: "Understanding Gerber file formats and their significance", duration: "1 hour" },
            { topic: "Exporting Gerber files from your completed KiCad project", duration: "1 hour" }
        ],
        handsOnProject: { title: "Generate Gerber files for your PCB design ready for production", duration: "3 hours" }
    },
    module12: {
        title: "Module 12 : Advanced Routing Techniques",
        description: "Exploring complex routing strategies for multi-layer PCBs.",
        price: "Ugx 35,000/=",
        outline: [
            { topic: "Using vias effectively for multi-layer routing", duration: "2 hours" },
            { topic: "Implementing differential pair routing techniques where applicable", duration: "2 hours" }
        ],
        handsOnProject: { title: "Create a multi-layer PCB design with advanced routing techniques applied", duration: "4 hours" }
    },
    module13: {
        title: "Module 13 : Working with Libraries in KiCad",
        description: "Managing component libraries effectively within KiCad.",
        price: "Ugx 30,000/=",
        outline: [
            { topic: "Understanding library structure and management tools ", duration: "1 hour" },
            { topic: "Creating custom libraries for specific projects ", duration: "2 hours" }
        ],
        handsOnProject: { title: "Set up a custom library for your projects ", duration: "3 hours" }
    },
    module14: {
        title: "Module 14 : Final Project and Review ",
        description: "A comprehensive project that incorporates all learned skills, culminating in a complete PCB design ready for production. ",
        price: "Ugx 50,000/=",
        outline: [
            { topic: "Reviewing all concepts learned throughout the course ", duration: "1 hour" },
            { topic: "Working on an individual project that showcases skills acquired ", duration: "4 hours" },
            { topic: "Presenting your final project to peers for feedback ", duration: "1 hour" }
        ],
        handsOnProject: { title: "Complete your final project incorporating all learned skills ", duration: "5 hours" }
    },
    module15: {
        title: "Module 12 : Preparing for Manufacturing in China",
        description: "Comprehensive preparation steps for manufacturing PCBs in China, including aspects like paneling, CSV file generation, and communication with manufacturers.",
        price: "Ugx 40,000/=",
        outline: [
            { topic: "Understanding panelization techniques for efficient manufacturing runs ", duration: "1 hour" },
            { topic: "Creating CSV files containing BOM (Bill of Materials) ", duration: "1 hour" },
            { topic: "Best practices for communicating specifications and requirements to Chinese manufacturers ", duration: "1 hour" }
        ],
        handsOnProject: { title: "Prepare a complete manufacturing package including panelized designs, Gerber files, BOMs, and CSV files ready for submission to a manufacturer ", duration: "4 hours" }
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