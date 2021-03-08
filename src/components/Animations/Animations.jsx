import React from 'react';
 import Puzzle1 from '../../img/1.svg';
 import  Puzzle2 from '../../img/2.svg';
 import Puzzle3 from '../../img/3.svg';
 import  Puzzle4 from '../../img/4.svg';


const Animations = () =>  {
    return (
        <div className="animations__item">
            <div className="teste">
                    <img className="animations__item-1" src={Puzzle1} />
                    
                    <img className="animations__item-2" src={Puzzle2} />
            </div>
            <div className="teste">
                    <img className="animations__item-3" src={Puzzle3} />
                    <img className="animations__item-4" src={Puzzle4} />
            
            </div>
             </div>
       );
  }


export default Animations;
