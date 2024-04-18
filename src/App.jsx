import { Stack } from 'react-bootstrap/Stack'
import { Container } from 'react-bootstrap/Container'

import Header from './components/Header'
import Posts from './components/Posts'
import Padawans from './components/Padawans'
import RegisterForm from './components/forms/registerForm'
import Sidebar from './components/SideBar'

export default function App() {


  return (
    <>
      <Header />
      
      <Padawans />

      <Posts />
    </>
  )

}