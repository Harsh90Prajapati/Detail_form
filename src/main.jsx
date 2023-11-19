
import ReactDOM from 'react-dom/client'
import './index.css'
import StepperContext from './contexts/StepperContext.jsx'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <StepperContext>
  <ToastContainer theme="colored"  />
    <App />
    </StepperContext>
</div>
)
