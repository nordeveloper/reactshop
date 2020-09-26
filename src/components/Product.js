import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

const domain = global.config.site.domain;
const imgurl = domain+global.config.site.storage;

class getProducts extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        item: []
      };     
    }
    
    componentDidMount() {

      const { id } = this.props.match.params

      fetch(domain+`/api/product/${id}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              item: result
            });
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    addtobasket = (prodid) =>{
        fetch(`${domain}/api/basket/add/${prodid}`);
    }
  
    render() {
      
      const { error, isLoaded, item } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        return (
          <div className="row product-detail">
              <div className="col-md-6">
                 <div className="product-image">
                     <img src={imgurl+item.preview_image}/>
                 </div>
                 <div className="product-gallery">
                 
                 {
                 item.images.map(item =>(
                    <div key={item.id} className="gallery-image">
                        <a href={imgurl+item.path}><img src={imgurl+item.path} /></a>
                    </div>
                 ) )
                 }
                 </div>
              </div>

              <div className="col-md-6">
                  <h1>{item.title}</h1>
                  <p className="product-price">{item.price}</p>
                  <button onClick={this.addtobasket.bind(this,item.id)} className="btn btn-success btn-addtobasket">Add to Cart</button>
              </div>

              <div className="col-md-12">
                <p>Description</p>
                {item.detail_text}
              </div>
          </div>
        );
      }
    }
  }

  export default getProducts;