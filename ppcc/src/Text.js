import '/Users/williamanderson/Desktop/Github-Repo/product-previw-card-component/ppcc/src/Text.css'
import Addtocart from './Addtocart';
import '/Users/williamanderson/Desktop/Github-Repo/product-previw-card-component/ppcc/src/App.css'
const Text = () => {
  return (
    <>
<div class="col-md-8 p-2">
      <div class="card-body ms-4">
        <h5 class="card-title fs-6" style={{ fontFamily: 'Fraunces, serif' }}>
        <small class="text-body-secondary text-wrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Perfume</small></h5>
        <p class="card-text fs-3"><strong>Gabrielle</strong><br></br><strong>Essence Eau</strong> <br></br><strong>De Parfum</strong> </p>
        <p class="card-text fs-6" style={{ fontFamily: 'Fraunces, serif' }}>
                <small class="text-body-secondary text-wrap" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  A floral, solar and voluptuous<br></br> interpretation
                  composed by Olivier Polge, Perfumer-Creator for the House of
                  CHANEL.
                </small>
              </p>
      <p class="text-success fs-3" style={{ fontFamily: 'Fraunces, serif' }}>
                $149.99{" "}
                <span class="text-decoration-line-through text-black fs-6">
                  $169.99
                </span>
                </p>
                <Addtocart />
      </div>
</div>
</>

  )
}
export default Text;