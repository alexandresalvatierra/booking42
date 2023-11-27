import BookingActions from './actions'
import BookingActionsTypes from './actions-types'

const initialState: BookingState = { bookings: [] }

const bookingReducer = (state = initialState, action: BookingActions) => {
  switch (action.type) {
    case BookingActionsTypes.CREATE_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings!, action.payload],
      }
    case BookingActionsTypes.DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          (booking) => booking.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export default bookingReducer
