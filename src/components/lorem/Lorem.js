import React, { Component } from 'react';
import './style.css';
import ItemLorem from './item_lorem/ItemLorem'

class Lorem extends Component {

  render() {

    return (
      <div id='yarn'>       
        <ItemLorem 
          type={false} 
          imagem="http://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Educate-BuildAwareness.svg?t=1525446690975" 
          icon="https://www.stackoverflowbusiness.com/hubfs/B2B-SO/Sales/Images/Home/Educate.svg?t=1525446690975" 
          topico="Topico" 
          titulo="Titulo onsectetur adipiscing elit" 
          texto=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore e"
        />
      </div>
    );

  }
}


export default Lorem;
