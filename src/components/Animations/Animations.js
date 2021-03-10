import React ,  { useState , Fragment}  from 'react';
 import Puzzle1 from '../../img/1.svg';
 import  Puzzle2 from '../../img/2.svg';
 import Puzzle3 from '../../img/3.svg';
 import  Puzzle4 from '../../img/4.svg';
 
 import './style.css';

const Animations = (fieldsData) =>  {
      
         
         const aff = []

        const dataAnimations = fieldsData.fieldsData;
        const isData = Array.isArray(dataAnimations);
        if (isData === true) {
                dataAnimations.map(item =>   {
                      
                        aff.push(item);
                     
                        
                 
                });
        }
     
         
       
      
        return (
        <div className="animations__item">
            <div className="teste">
                  {aff.map(item => {
                        if(item.id === 1) {
                               
                                return (
                               
                                     
                                       <div  className="animations__item-div"  key={item.id}>
                                                <img className="animations__item-1 animation-1" src={Puzzle1} />
                                                <h2 className="animations__item-h1 animation-1 ">{item.content }</h2>
                                        </div>
                                    
                                      
                               
                                        
                                )
                        } else if(item.id === 2){
                               
                                return (
                                        
                                         <div  className="animations__item-div"  key={item.id}>
                                                <img className="animations__item-2 animation-2 " src={Puzzle2} />
                                                <h2 className="animations__item-h2  animation-2">{item.content }</h2>
                                        </div>
                                    
                                        
                                       
                                )
                        }




                        
                        
                  })
                  
                  
                  
                  }
                  
                   
                 
            </div>

            <div className="teste">
            {aff.map(item => {
                        if(item.id === 3) {
                                 
                                return (
                               
                                     
                                       <div  className="animations__item-div"  key={item.id}>
                                                <img className="animations__item-3 animation-3" src={Puzzle3} />
                                                <h2 className="animations__item-h3 animation-3 ">{item.content }</h2>
                                        </div>
                                    
                                      
                               
                                        
                                )
                        } else if(item.id=== 4){
                    
                                return (
                                        
                                         <div  className="animations__item-div"  key={item.id}>
                                                <img className="animations__item-4 animation-4 " src={Puzzle4} />
                                                <h2 className="animations__item-h4  animation-4">{item.content }</h2>
                                        </div>
                                    
                                        
                                       
                                )
                        }
                        
                  })
                  
                  
                  
                  }
                  
                   
            
            </div>
             </div>
       );
  }


export default Animations;
