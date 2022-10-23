import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './services/Routes';

export function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
