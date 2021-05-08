const initialState = {
  loading: false,
  myId: '',
  openProfile: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'profile/OpenAndDelete':
      return {
        ...state,
        openProfile: !state.openProfile,
      };
    case 'load/profile/start':
      return {
        ...state,
        loading: true,
      };

    case 'load/profile/success':
      return {
        ...state,
        loading: false,
        myId: action.payload._id,
      };

    default:
      return state;
  }
}

// тут экшн креэйторы

// тут санки
export const loadMyId = () => {
  return (dispatch) => {
    dispatch({ type: 'load/profile/start' });
    fetch(`https://api.intocode.ru:8001/api/profile`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/profile/success',
          payload: json,
        });
      });
  };
};
export const loadProfileInfo = (myId, contactId) => {
  return (dispatch) => {
    dispatch({ type: 'load/profileInfo/start', payload: contactId });

    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/profileInfo/success',
          payload: json,
        });
      });
  };
};
export function profileContactOpen() {
  return { type: 'profile/OpenAndDelete' };
}
