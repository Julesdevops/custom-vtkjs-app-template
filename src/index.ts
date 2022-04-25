// -----------------------------------------------------------
// Trivial ConeSource example ; You can start building your
// own stuff from here
// -----------------------------------------------------------

import 'vtk.js/Sources/favicon';
import 'vtk.js/Sources/Rendering/Profiles/Geometry';

import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkRenderer from 'vtk.js/Sources/Rendering/Core/Renderer';
import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';

const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
  background: [0, 0, 0],
});
const renderer: vtkRenderer = fullScreenRenderer.getRenderer();
const renderWindow: vtkRenderWindow = fullScreenRenderer.getRenderWindow();

const coneSource = vtkConeSource.newInstance();
const actor = vtkActor.newInstance();
const mapper = vtkMapper.newInstance();

actor.setMapper(mapper);
mapper.setInputConnection(coneSource.getOutputPort());

renderer.addActor(actor);

renderer.resetCamera();
renderWindow.render();

// -----------------------------------------------------------
// You can expose some variables in the windows object to be 
// able to interact with it in the browser console
// -----------------------------------------------------------

// @ts-ignore
window.renderer = renderer;
// @ts-ignore
window.renderWindow = renderWindow;