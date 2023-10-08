import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';
import Image from './Image';
import Text from './Text';

function App() {
  return (
    <>
    <div className="App"></div>
    
    <body>      
      <div className="card mb-3 rounded fixed-top position-absolute top-50 start-50 translate-middle"
        style={{ maxWidth: "540px" }}>
  <div class="row g-0">
    <div class="col-md-4">
      <Image />
    </div>
    <Text />
  </div>
</div>
    </body>
    <div class="attribution position-absolute bottom-0 start-50 translate-middle-x">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/wllmAnderson">William Anderson</a>.
      </div>
      </>
  );
}

export default App;
