import PropertyActions from './actions'
import PropertyActionsTypes from './actions-types'
import campingImg from '../../assets/camping-house.jpg'
import castleImg from '../../assets/castle-beach-house.jpg'
import classicImg from '../../assets/classic-house.jpg'
import mountainImg from '../../assets/mountain-house.jpg'

const initialState: PropertyState = {
  properties: [
    {
      id: 'f584d316-8a44-11ee-b9d1-0242ac120002',
      title: 'Camping House',
      description: 'Feel the nature',
      image: campingImg,
      price: 120,
    },
    {
      id: '5e25253a-8ad9-11ee-b9d1-0242ac120002',
      title: 'Castle Beach',
      description: 'Amazing view',
      image: castleImg,
      price: 250,
    },
    {
      id: '7dc90258-8ad9-11ee-b9d1-0242ac120002',
      title: 'Classic House',
      description: 'Good vibes',
      image: classicImg,
      price: 250,
    },
    {
      id: 'fdf7d764-8a44-11ee-b9d1-0242ac120002',
      title: 'Mountain House',
      image: mountainImg,
      description: 'To the hills',
      price: 150,
    },
  ],
  propertySelected: null,
}

const propertyReducer = (state = initialState, action: PropertyActions) => {
  switch (action.type) {
    case PropertyActionsTypes.SELECT_PROPERTY:
      state.propertySelected = action.payload
      return { ...state, payload: action.payload }
    default:
      return state
  }
}

export default propertyReducer
