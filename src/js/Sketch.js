import * as THREE from "three";

export default class Sketch {
    /**
     * initialize a new Sketch class
     * @param {object} config - Sketch config
     * @param {boolean} config.enableControls - use orbit controls or not
     * @param {string|HTMLElement} config.container - container id Sketch will append canvas to
     */
    constructor({ enableControls, container } = {}) {
        this.enableControls = enableControls;
        this.container =
            typeof container == "string"
                ? document.body.querySelector(container)
                : container;

        this.components = [];

        // initialize Three.js
        this.#createScene();
        this.#createCamera();
        this.#createRenderer();
    }

    add(...components) {
        components.forEach((component) => {
            this.components.push(component);
            this.scene.add(component.object);
        });
    }

    /**
     * get the size of the Sketch
     * @returns {object} - { width, height }
     */
    get size() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    /**
     * aspect ratio of Sketch
     * @returns {number} - aspect ratio
     */
    get aspect() {
        return this.size.width / this.size.height;
    }

    get viewport() {}

    /**
     * initialize Three.js scene
     * @private
     * @returns {void}
     */
    #createScene() {
        this.scene = new THREE.Scene();
    }

    /**
     * initialize Three.js camera
     * @private
     * @returns {void}
     */
    #createCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 1000);
        this.camera.position.z = 5;
    }

    /**
     * initialize Three.js renderer
     * @private
     * @returns {void}
     */
    #createRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.size.width, this.size.height);
        this.container.appendChild(this.renderer.domElement);
    }

    /**
     * animation loop
     * @returns {void}
     */
    startCore() {
        const core = () => {
            requestAnimationFrame(core);

            this.components.forEach((component) => component.update());
            this.components.forEach((component) => component.render());

            this.renderer.render(this.scene, this.camera);
        };

        core();
    }
}
