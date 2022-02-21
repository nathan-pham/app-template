import "@/css/globals.css";
import "@/css/index.css";

import Sketch from "./Sketch";
import Plane from "./components/Plane";

const sketch = new Sketch({ enableControls: false, container: "#app" });

sketch.add(new Plane());
sketch.startCore();
