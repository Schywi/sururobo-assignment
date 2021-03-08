import React from 'react';

import '@atlaskit/css-reset';
import './styles/css/style.css';
import { DragDropContext } from 'react-beautiful-dnd';
import logo from './img/logo.png'
 
 import Emotional from './components/Emotional/Emotional.js';
 import Inteligence from './components/Inteligence/Inteligence.js';
 import Conversation from './components/Conversation/Conversation.js';
 import Artificial from './components/Artificial/Artificial.js';
 import Animations from './components/Animations/Animations.jsx';

function App() {
     
  
    return (
      <div className="App">
          
        <section>
        <Emotional/>
          <Inteligence/>
          <Conversation/>
          <Artificial/>
        <Animations/>

         </section>

          <aside>
              <img src={logo} alt=""/>
              <div class="items">
                
            
                 
              </div>
          </aside>
      </div>
    );
  }
  
  export default App;