import BookingActions from './actions'
import BookingActionsTypes from './actions-types'

const initialState: BookingState = { bookings: [], bookingSelected: null }

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
    case BookingActionsTypes.UPDATE_BOOKING:
      return {
        ...state,
        bookings: [
          ...state.bookings.filter(
            (booking) => booking.id !== action.payload.id
          ),
          action.payload,
        ],
      }
    case BookingActionsTypes.SELECT_BOOKING:
      state.bookingSelected = action.payload
      return { ...state, payload: action.payload }
    default:
      return state
  }
}

export default bookingReducer
