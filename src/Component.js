import KedroViz from "@quantumblack/kedro-viz";
import { spaceflights } from "./spaceflights";

var jsondata = require('./pipeline.json'); //for now, but gets compiled into package 

//test async loader
async function getJsonDataAsync(){
  console.log("getting Json");
  var jsondata;
  return await fetch('/space.json')
    .then(response => response.json())
    .then(json => {
      console.log("data returned");
      console.log(json);
      jsondata = json;
    });
}

function Component() {
  console.log("Loading component.")

  //var r = getJsonDataAsync(); //will load data
  //console.log("r: ", r); // but can't await it as Component can't be async
  
  console.log("returning component.")

  return (
    <div style={{ height: `100vh`, width: `100%` }}>
      <KedroViz
        data={jsondata}
        display={{
          expandAllPipelines: false,
          globalToolbar: false,
          miniMap: false,
          sidebar: false,
        }}
        theme="dark"
      />
    </div>
  );
}

export default Component;
