import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { doggies } from './doggies';

export default function App() {
  return (
    <div>
      <Footer 
        phone='(212) 555-4345' whatever="cooool" />
      <Main doggies={doggies}/>
      <Header username='dr cool' />
    </div>
  );
}