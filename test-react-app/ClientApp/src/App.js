import './styles/clear.css'
import './styles/fonts.css'
import './styles/libs/fontawesome/all.min.css'
import RouterNavigator from './layouts/Router'
import axios from 'axios'


function App() {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];

  return (
    <RouterNavigator>
    </RouterNavigator>
  );
}

export default App;
