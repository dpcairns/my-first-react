import snail from './images/snail-images/snail.jpeg';
import DogList from './DogList';
import Button from './Button';

export default function Main(props) {
  return (
    <>
      <div>hello!</div>
      <section className="magenta">
        {/* <p>I am importing this image in javascript:</p>
        <img src={snail}/>
        <p>I am just using an image from the public directory</p>
        <img src='cats.webp'/> */}

        Let&apos;s do a list

        <DogList doggies={props.doggies} />
        {/* <Button text='click me' color='orange'/>
        <Button text='with' color='red'/>
        <Button text='diff' color='blue'/>
        <Button text='erent' color='green'/>
        <Button text='text' color='yellow'/> */}

      </section>
    </>
  );

}