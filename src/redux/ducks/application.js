const initialState = {
  loading: false,
  myId: '',
  openProfile: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'profile/OpenOrClose':
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

export function profileContactOpen() {
  return { type: 'profile/OpenOrClose' };
}

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
