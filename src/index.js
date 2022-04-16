import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.js'
import { Provider } from 'react-redux'
import { store } from './redux'

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
