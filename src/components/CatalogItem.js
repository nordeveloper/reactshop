import React from 'react';
import { Link } from 'react-router-dom';
import '../config.js';

const domain  = global.config.site.domain;

// domain = global.config.site.doamin;

class CatalogItem extends React.Component{

  addtobasket = (prodid) =>{
    fetch(domain+"api/basket/add/"+prodid);
  }  

  render() {
      return (
        <div className="card product-item">
        <div className="card-body">
          <div className="item-image">
          <img src={domain+'/storage/'+this.props.preview_image}/>
          </div>
          <p className="ptoduct-title"><Link to={`/product/${this.props.id}`}>{this.props.title}</Link></p>
          <p className="product-price">{this.props.price}</p>
          <button onClick={this.addtobasket.bind(this,this.props.id)} className="btn btn-success btn-addtobasket">Add to cart</button>
        </div>
        </div>
      )
  };

}

export default CatalogItem;
