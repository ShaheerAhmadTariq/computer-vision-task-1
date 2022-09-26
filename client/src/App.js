import './App.css';
import React from "react"
import ReactPlayer from 'react-player';

function App() {
  const [state, setState] = React.useState({
    file: null,
  })
  return (
    <div className="App">
      <form>
        <input type={"file"} accept="video/*" onChange={(e) => {
          const file = e.target.files[0];
          if (!file) return;
          console.log(file)
          const fileReader = new FileReader()
          fileReader.onload = (e) => {
            console.log(e.target.result)
            setState({ ...state, file: e.target.result })
          }
          fileReader.readAsDataURL(file)
        }} />
        {/* <ReactPlayer
          url={state.file}
          controls
          height={250}
          width={250}
        /> */}

<video
src={state.file}
height={250}
width={250}
controls
/>
      </form>
    </div>
  );
}

export default App;
