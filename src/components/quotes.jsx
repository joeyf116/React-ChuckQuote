import React, { Component } from 'react';
import { loadData } from '../utilities/loadData';

class Quote extends Component {
    state = { 
        quote: "Fetching Quotes",
     };

     async componentDidMount() {
         const category = this.props.match.params.category_name;


         this.getQuote();
     }


     getQuote = async () => {
        const category = this.props.match.params.category_name;

        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
            ); 
        const quote = data.value;

         this.setState({
            quote
         })
     };

     handleClick = () => {
        this.getQuote(this.props.match.params.category_name);
     }


    render() { 
        const { quote } = this.state;
        const category = this.props.match.params.category_name;
        return (
            <>
                <p>{quote}</p>
                <button onClick={() => this.handleClick()}>Get another Quote from the {category} category</button>
            </>
        );
    }
}
 
export default Quote;