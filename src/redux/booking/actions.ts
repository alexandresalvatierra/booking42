import BookingActionsTypes from './actions-types'

export type CreateBooking = {
  type: BookingActionsTypes.CREATE_BOOKING
  payload: Booking
}

export type UpdateBooking = {
  type: BookingActionsTypes.UPDATE_BOOKING
  payload: Booking
}

export type DeleteBooking = {
  type: BookingActionsTypes.DELETE_BOOKING
  payload: string
}

export type SelectBooking = {
  type: BookingActionsTypes.SELECT_BOOKING
  payload: Booking | null
}

type BookingActions =
  | CreateBooking
  | UpdateBooking
  | DeleteBooking
  | SelectBooking

export default BookingActions
