import Footer from './components/Footer'
import Header from './components/Header'
import Properties from './components/Properties'
import { BookingContextProvider } from './contexts/BookingContext'
import Bookings from './components/Bookings'

function App() {
  return (
    <>
      <Header />
      <main className='w-full p-4'>
        <BookingContextProvider>
          <Properties />
          <Bookings />
        </BookingContextProvider>
      </main>
      <Footer />
    </>
  )
}

export default App
