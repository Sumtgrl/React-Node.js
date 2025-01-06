import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import MainLayouts from './layouts/mainlayouts.jsx'
import SepetProvider from './context/sepetprovider.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SepetProvider>
      <MainLayouts>
        <App />
      </MainLayouts>
    </SepetProvider>
  </BrowserRouter>
)
