import * as THREE from "three";
import Component from "@/js/components/Component";

import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";

export default class Plane extends Component {
    name = "plane";

    constructor() {
        super();

        const geometry = new THREE.PlaneBufferGeometry(100, 100);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
            },
            vertexShader,
            fragmentShader,
        });

        this.object = new THREE.Mesh(geometry, material);
    }

    update(app) {
        this.object.material.uniforms.time.value = app.time;
    }
}
