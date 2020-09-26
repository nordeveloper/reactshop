import React from 'react';

const domain = global.config.site.domain;

class getProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          item: []
        };      
      }


      componentDidMount() {

        fetch(domain+"/api/product/1")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
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


      render() {
        const imgurl = `${domain}/storage/`;
        const { error, isLoaded, item } = this.state;
        console.log(item);
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
            {item.title}
          </div>
          )
        }

      }

}


export default getProduct;