import HeaderChild from './HeaderChild';

export default function Header(props) {
// most work happens here in the cool zone
  return <h1>Welcome {props.username}
    {/* i have props.username. I want to give it to my child. Here is how i pass that username down to my child. */}
    {/* <HeaderChild username={props.username} /> */}
  </h1>;
}