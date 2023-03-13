import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/';


// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 10
//         };
//         // this.addOne = () => {
//         //     this.setState(state => ({
//         //         number: ++state.number
//         //     }))
//         // }

//         // this.addOne = this.addOne.bind(this);
//     }

//     addOne = () => {
//         this.setState(state => ({
//             number: ++state.number
//         }))
//     }

//     // addOne() {
//     //     this.setState(state => ({
//     //         number: ++state.number
//     //     }))
//     // }

//     render() {
//         const {a, b} = this.props;
//         const {number} = this.state;
//         return (
//             <>
//                 <h1>Hello</h1>
//                 <button onClick={this.addOne}>+1</button>
//                 <p>a = {a}, b = {b}</p>
//                 <p>c = {number}</p>
//             </>
//         )
//     }
// }


// const All = () => {
//     return (
//         <>
//             <WhoAmI a="1" b="2"/>
//             <WhoAmI a="3" b="4"/>
//         </>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
