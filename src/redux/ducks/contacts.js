const initialState = {
  filter: "",
  avatars: [],
  items: [],
  loading: false,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return {
        ...state,
        loading: true,
      }
    case 'contacts/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    case 'avatars/load/start':
      return {
        ...state,
        loading: true,
      }

    case 'avatars/load/success':
      return {
        ...state,
        avatars: action.payload,
        loading: false,
      }


    case 'filter/set':
      return {
        ...state,
        filter: action.payload
      }


    default:
      return state;
  }
}



export const loadContacts = () => {
  return dispatch => {
    dispatch({type: 'contacts/load/start'})
    fetch(`https://api.intocode.ru:8001/api/contacts`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'contacts/load/success',
          payload: json,
        })
      })
  }
}
export const loadAvatars = () => {
  return dispatch => {
    dispatch({type: 'avatars/load/start'})
    fetch(`https://api.intocode.ru:8001/api/profile`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'avatars/load/success',
          payload: json,
        })
      })
  }
}

export const setFilterText = (text) => {
  return dispatch => {
  dispatch({
    type: 'filter/set',
    payload: text
  })
  }
}

