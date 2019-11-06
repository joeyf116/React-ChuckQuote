import React, { Component } from 'react';
import { loadData } from '../utilities/loadData';

class Quote extends Component {
    state = { 
        quote: "Fetching Quotes",
     };

     async componentDidMount() {
         this.getQuote();
     }

     componentDidUpdate(prevProps) {
         if (prevProps.category !== this.props.category) {
             this.getQuote();
         }
     }

     getQuote = async () => {
        const { category } = this.props;
        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
            ); 
        const quote = data.value;
         this.setState({
            quote
         })
     };

     handleClick = () => {
        this.getQuote();
        // this.getCategory();
     }


    render() { 
        console.log(this.props);
        const { quote } = this.state;
        return (
            <>
                <p>{quote}</p>
                <button onClick={() => this.handleClick()}>Get another Quote</button>
            </>
        );
    }
}
 
export default Quote;