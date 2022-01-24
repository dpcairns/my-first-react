import React from 'react';

export default function HeaderGrandchild(props) {
  return <div>This is the header grandchild
      
    The header grandchild now has access to the data that lives aaaaalll the way up in App.js, 5 components away: {props.username}
  </div>;
}
