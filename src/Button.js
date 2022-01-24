import React from 'react';

export default function Button(props) {
  return <button style={{ background: props.color }}>{props.text}</button>;
}
