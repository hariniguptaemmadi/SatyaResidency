import 'src/style.css';
import { Navbar } from './components/Navbar'
import { Booking } from './components/BookingBar'
import { Hero } from './components/Hero'
import { Facilities } from './components/Facilities'


document.querySelector('#app').innerHTML = `
  ${Navbar()}
  ${Booking()}
  ${Hero()}
  ${Facilities()}
`
