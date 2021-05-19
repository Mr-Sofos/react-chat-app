import { scrollChatDown } from '../../components/utils/scrollMessagges';

const initialState = {
  filter: '',
  loading: true,
  opened: null,
  items: [],
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'load/messages/start':
      return {
        ...state,
        loading: true,
        opened: action.payload,
      };

    case 'load/messages/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'send/message/start':
      const tempMessage = {
        ...action.payload,
        sending: true,
      };
      return {
        ...state,
        items: [...state.items, tempMessage],
      };

    case 'send/message/success':
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === action.payload.ranId) {
            return {
              ...item,
              sending: false,
              _id: action.payload._id,
            };
          }
          return item;
        }),
      };

    case 'filter/messages':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export const loadMessages = (myId, contactId) => {
  return (dispatch) => {
    dispatch({ type: 'load/messages/start', payload: contactId });

    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/messages/success',
          payload: json,
        });
        scrollChatDown();
      });
  };
};

export const sendMessage = (contactId, myId, content) => {
  return (dispatch) => {
    const ranId = Math.floor(Math.random() * 100) + 1;
    dispatch({
      type: 'send/message/start',
      payload: { ranId: ranId, contactId, myId, content, type: 'text' },
    });
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        myId,
        contactId,
        content,
        type: 'text',
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'send/message/success',
          payload: { ranId: ranId, ...json },
        });
        scrollChatDown();
      });
  };
};

export const setFilterMessages = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'filter/messages',
      payload: text,
    });
  };
};
