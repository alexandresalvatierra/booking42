import PropertyActionsTypes from './actions-types'

export type SelectProperty = {
  type: PropertyActionsTypes.SELECT_PROPERTY
  payload: Property | null
}

type PropertyActions = SelectProperty

export default PropertyActions
