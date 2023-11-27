import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux/root-reducer'
import Booking from './Booking'
import { Modal } from '../common/Modal'
import { ToastContainer, toast } from 'react-toastify'
import BookingActions from '../../redux/booking/actions'
import BookingActionsTypes from '../../redux/booking/actions-types'
import PropertyActions from '../../redux/property/actions'
import PropertyActionsTypes from '../../redux/property/actions-types'
import { useContext } from 'react'
import BookingContext from '../../contexts/BookingContext'
import { v4 as uuidv4 } from 'uuid'
import 'react-toastify/dist/ReactToastify.css'
import BookingCreate from '../Bookings/BookingCreate'
import { checkDateInRange, convertDateToUTC } from '../../utils/'

const Bookings = () => {
  const dispatch = useDispatch()
  const { bookings } = useSelector(
    (rootReducer: RootReducer) => rootReducer.bookingReducer
  )
  const { propertySelected } = useSelector(
    (rootReducer: RootReducer) => rootReducer.propertyReducer
  )
  const { name, setName, checkIn, setCheckIn, checkOut, setCheckOut } =
    useContext(BookingContext)

  const handleCancelBook = () => {
    setName('')
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    setCheckIn(today)
    setCheckOut(tomorrow)

    const action: PropertyActions = {
      type: PropertyActionsTypes.SELECTED_PROPERTY,
      payload: null,
    }
    dispatch(action)
  }

  const handleSubmitBook = () => {
    if (name.trim() === '') {
      toast.warn('Please fill your name')
      return false
    }

    if (checkIsDateAlreadyBooked(checkIn, propertySelected!.id, bookings)) {
      toast.warn('This date rage is already booked for this place')
      return false
    } else {
      const booking = {
        id: uuidv4(),
        name,
        checkIn: convertDateToUTC(checkIn),
        checkOut: convertDateToUTC(checkOut),
        property: propertySelected!,
      }

      const action: BookingActions = {
        type: BookingActionsTypes.CREATE_BOOKING,
        payload: booking,
      }
      dispatch(action)

      toast.success('Booking successfully added')
      handleCancelBook()
    }
  }

  const handleDeleteBook = (id: string) => {
    const action: BookingActions = {
      type: BookingActionsTypes.DELETE_BOOKING,
      payload: id,
    }
    dispatch(action)
    toast.success('Booking successfully deleted')
  }

  const checkIsDateAlreadyBooked = (
    checkIn: Date,
    idProperty: string,
    bookings: Booking[] | []
  ) => {
    let found = false
    const booking = bookings.filter((booking) => {
      const checkInUTC = convertDateToUTC(checkIn)
      const isCheckInInRange = checkDateInRange(
        checkInUTC,
        booking.checkIn,
        booking.checkOut
      )
      if (booking.property?.id === idProperty && isCheckInInRange) {
        return booking
      }
    })
    if (booking.length !== 0) {
      found = true
    }
    return found
  }

  return (
    <>
      {bookings.length !== 0 && (
        <section className='m-auto'>
          <h2 className='mb-4 mt-12'>Your Bookings</h2>
          {bookings?.map((booking) => (
            <Booking
              key={booking.id}
              booking={booking}
              onDelete={handleDeleteBook}
            />
          ))}
        </section>
      )}
      {propertySelected && (
        <Modal.Root onClickOutside={handleCancelBook}>
          <Modal.Header
            title={'Booking: ' + propertySelected.title}
            onClickClose={handleCancelBook}
          />
          <Modal.Content>
            <BookingCreate
              property={propertySelected}
              onSubmit={handleSubmitBook}
            />
          </Modal.Content>
          <Modal.Footer>
            <Modal.FooterContent>
              <span className='mr-auto inline-block font-bold'>
                Total: ${propertySelected.price}
              </span>
            </Modal.FooterContent>
            <Modal.FooterAction
              text='Cancel'
              onClick={handleCancelBook}
              className='bg-transparent text-emerald-500 hover:bg-emerald-500 hover:text-white'
            />
            <Modal.FooterAction text='Book' onClick={handleSubmitBook} />
          </Modal.Footer>
        </Modal.Root>
      )}
      <ToastContainer
        position='top-center'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme='dark'
      />
    </>
  )
}
export default Bookings
