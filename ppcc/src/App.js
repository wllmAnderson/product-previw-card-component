
import './App.css';
import Image from './Image';

function App() {
  return (
    <body>

      Perfume

      Gabrielle Essence Eau De Parfum

      A floral, solar and voluptuous interpretation composed by Olivier Polge, 
      Perfumer-Creator for the House of CHANEL.

      $149.99
      $169.99

      Add to Cart
      
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
      <div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <Image />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    </body>
  );
}

export default App;
