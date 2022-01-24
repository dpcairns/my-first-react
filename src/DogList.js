import React from 'react';
import Doggy from './Doggy';

export default function DogList(props) {
  return <div>
    {
          // curly braces are portal to js
      props.doggies.map((doggy, i) => 
        <Doggy 
          key={doggy.name + i} 
        // //   name={doggy.name} 
        // //   age={doggy.age} 
        // //   temperment={doggy.temperment} 
        //   {...doggy} 
        // //   this automatically passes every property down as its own prop
          doggy={doggy}
        />)
    }
  </div>;
}
