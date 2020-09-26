import React from 'react';

const domain  = global.config.site.domain;

class Basket extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };      
  }

  componentDidMount() {

    fetch(domain+"api/basket")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
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

    render() {

      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="shopping-list">
            <h2>Basket {this.props.name}</h2>
            <table className="table table-bordered table-hovered">
                <thead>
                <tr>
                    <th>Iamge</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Sum</th>
                </tr>                
                </thead>           
                <tbody>
                {
                items.map(item => (
                  <tr key={item.id}>
                  <td>image</td>
                <td>{item.title}</td>
                  <td><input className="form-control" type="text" name="quantity" value={item.quantity}/></td>
                  <td>{item.price}</td>
                  <td>{item.quantity*item.price}</td>
                  </tr>
                  )) 
                }
                </tbody>
            </table>
            <div className="total-block">
              <p className="h3">Total: 2000</p>
            </div>
          </div>
        );
      }

    }
}

export default Basket;


