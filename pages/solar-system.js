import { useEffect, useRef, useState } from "react";
import Navbar from "../components/NavBar";

const SolarSystem = () => {
    const containerRef = useRef(null);
    const [sim, setSim] = useState(null); // Store the simulation instance
    const [createdObjects, setCreatedObjects] = useState([]); // Track created objects

    useEffect(() => {
        if (!window.Spacekit || sim) return; // Avoid re-initialization

        const simulation = new window.Spacekit.Simulation(containerRef.current, {
            basePath: '/spacekit-assets/',
            camera: {
                initialPosition: [0, -50, 50],
            },
            debug: {
                showAxes: false,
                showGrid: false,
                showStats: false,
            },
        });

        // Create a skybox using local assets
        simulation.createSkybox({
            textureUrl: '/spacekit-assets/assets/skybox/nasa_tycho.jpg',
        });

        setSim(simulation); // Store the simulation instance

        const celestialObjects = [
            { name: 'sun', preset: window.Spacekit.SpaceObjectPresets.SUN },
            { name: 'mercury', preset: window.Spacekit.SpaceObjectPresets.MERCURY },
            { name: 'venus', preset: window.Spacekit.SpaceObjectPresets.VENUS },
            { name: 'earth', preset: window.Spacekit.SpaceObjectPresets.EARTH },
            { name: 'mars', preset: window.Spacekit.SpaceObjectPresets.MARS },
            { name: 'jupiter', preset: window.Spacekit.SpaceObjectPresets.JUPITER },
            { name: 'saturn', preset: window.Spacekit.SpaceObjectPresets.SATURN },
            { name: 'uranus', preset: window.Spacekit.SpaceObjectPresets.URANUS },
            { name: 'neptune', preset: window.Spacekit.SpaceObjectPresets.NEPTUNE },
        ];

        // Loop through each celestial object and create it
        celestialObjects.forEach(obj => {
            console.log(`Attempting to create object: ${obj.name}`);

            // Check if the object was already created
            if (!createdObjects.includes(obj.name)) {
                const createdObject = simulation.createObject(obj.name, obj.preset);
                createdObject.visible = true; // Ensure the object is visible
                console.log(`Created: ${obj.name}`);

                // Update the state to include the newly created object
                setCreatedObjects(prevState => [...prevState, obj.name]);
            } else {
                console.log(`${obj.name} already exists.`);
            }
        });

    }, [sim, createdObjects]); // Ensure objects are created after simulation initialization

    return (
        <>
            <Navbar />
            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: "500px",
                    position: "relative",
                }}
            ></div>
        </>
    );
};

export default SolarSystem;
