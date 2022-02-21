import * as THREE from "three";
import Component from "@/js/components/Component";

import fragmentShader from "./fragmentShader.glsl";
import vertexShader from "./vertexShader.glsl";

export default class Plane extends Component {
    name = "plane";

    constructor({ uniforms, size }) {
        super();

        const vMin = Math.min(size.width, size.height) / 2;

        const geometry = new THREE.PlaneBufferGeometry(vMin, vMin);
        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
        });

        this.object = new THREE.Mesh(geometry, material);
    }
}
