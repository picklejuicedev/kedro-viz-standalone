import KedroViz from "@quantumblack/kedro-viz";
// import { spaceflights } from "./spaceflights";


var json = require('./pipeline.json');


function Component() {
  return (
    <div style={{ height: `100vh`, width: `100%` }}>
      <KedroViz
        data={json}
        display={{
          expandAllPipelines: false,
          globalToolbar: false,
          miniMap: false,
          sidebar: true,
        }}
        theme="dark"
      />
    </div>
  );
}

export default Component;
