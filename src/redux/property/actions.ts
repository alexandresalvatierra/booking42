import PropertyActionsTypes from './actions-types'

export type SelectProperty = {
  type: PropertyActionsTypes.SELECTED_PROPERTY
  payload: Property | null
}

type PropertyActions = SelectProperty

export default PropertyActions
