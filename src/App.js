import React ,  { useState }  from 'react';

import '@atlaskit/css-reset';
import './styles/css/style.css';
import { DragDropContext } from 'react-beautiful-dnd';
import logo from './img/logo.png'
 
 import Emotional from './components/Emotional/Emotional.js';
 import Inteligence from './components/Inteligence/Inteligence.js';
 import Conversation from './components/Conversation/Conversation.js';
 import Artificial from './components/Artificial/Artificial.js';
 import Animations from './components/Animations/Animations.js';

 



 const db = [];

function App() {
  const [child, setChild] = useState([{}]);
   const callbackFunction = ({emotionalData,inteligenceData , conversationData ,artificialData}) => {      


 
      if(emotionalData != undefined) {
        db.push({ 
          id: 1,
          content: emotionalData})
        setChild(...child, {emotional: db[0].emotional})
      } else if (inteligenceData != undefined ) {
        db.push({ 
          id:2,
          content: inteligenceData })
        setChild(...child, {
        
          content: db[0].inteligence})
      } if (conversationData != undefined) {
        db.push(...child, { 
          id:3,
          content: conversationData })
         setChild({conversation: db[0].conversation})
      } else if (artificialData != undefined) {
        db.push({ 
          id:4,
          content:artificialData })
         setChild(...child, {artificial: db[0].artificial})
      }
     console.log( 'db'  ,db)
   
    setChild(db)
  };
  console.log('Sou eu ', child)

  console.log('s1', child[0])
    
 


    return (
      <div className="App">
       
       
        <section>
        <Emotional parentCallback={callbackFunction}/>
          <Inteligence  parentCallback={callbackFunction}/>
          <Conversation parentCallback={callbackFunction}/>
          <Artificial parentCallback={callbackFunction}/>
        <Animations fieldsData={child} 
          

        
        />
          

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