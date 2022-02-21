import "@/css/globals.css"
import "@/css/index.css"

import Sketch from "./Sketch"
import Cube from "./components/Cube";

const sketch = new Sketch({ enableControls: true, container: "#app" });

sketch.add(new Cube());
sketch.startCore();