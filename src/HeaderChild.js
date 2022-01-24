import React from 'react';
import HeaderGrandchild from './HeaderGrandchild';

export default function HeaderChild(props) {
  return <div>This is the header child
    <HeaderGrandchild username={props.username} />
  </div>;
}
