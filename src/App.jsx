import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import FeedPage from './pages/FeedPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'
import Counter from './components/counter';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Counter/>
        </div>
  )}
}

{/* export default function App() {

  return (
    <Container fluid className='app'>
      <Header />
      <UsersPage />
    </Container>
  )

}

class App extends Component {
  render() {
    return (
        <div className="App">
        <Counter/> */}