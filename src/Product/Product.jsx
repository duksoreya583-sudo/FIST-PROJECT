import React from 'react'
import image from '../assets/javascript'

function Product() {
  return (
    <div className="container py-4">

      <div className="row g-4">
        {image.map((i) => (
          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i.id}>
            
            <div className="card h-100">
              
              <img 
                src={i.image} 
                alt={i.name} 
                className="card-img-top img-fluid h-75"
              />

              <div className="card-body text-center">
                <h5 className="card-title">{i.name}</h5>
              </div>

            </div>

          </div>

        ))}
      </div>

    </div>
  )
}

export default Product