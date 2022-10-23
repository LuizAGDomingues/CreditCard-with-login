import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Routes from './services/Routes';

export function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
