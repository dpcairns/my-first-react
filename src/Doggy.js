import React from 'react';

export default function Doggy(props) {
  return <p>
    {props.doggy.name} is {props.doggy.age} years old and is somewhat {props.doggy.temperment}
  </p>;
}
