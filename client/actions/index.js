// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

// ASYNC ACTIONS
export const getWood = () => {
  return (dispatch) => {
    axios.get('/api/product/wood')
      .then(response => {
        dispatch({
          type: types.GET_WOOD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const getStain = () => {
  return (dispatch) => {
    axios.get('/api/product/stain')
      .then(response => {
        dispatch({
          type: types.GET_STAIN,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// export const login = (value) => {
// return (dispatch) => {
// axios.post('/* login route goes here */', {
//   email: value.email,
//   password: value.password
// })
// return {
//   type: types.LOGIN,
// }
//   .then(response => {
//     dispatch({
//       type: types.LOGIN,
//     })
//   })
//   .catch(err => {
//   console.log(err);
// });
// }
// };

// NON-ASYNC ACTIONS
export const submitOrder = (value) => {
  return (dispatch) => {
    // const myState = getState().cart
    // console.log(myState)
    // console.log(value);
    axios.post('/api/order', value)
    .then(response => {
      console.log('ran');
      // dispatch({
      //   type: types.SUBMIT_ORDER,
      //   payload: response.data
        })
      // })
      // .catch(err => {
      //   console.log(err)
      // });
  }
};

export const selectWood = (value) => {
  return {
    type: types.SELECT_WOOD,
    payload: value
  }
};
export const selectStain = (value) => {
  console.log(value);
  return {
    type: types.SELECT_STAIN,
    payload: value
  }
};
export const inputEmail = (value) => {
  return {
    type: types.INPUT_EMAIL,
    payload: value,
  }
};
export const logout = () => {
  console.log('logging out...');
  return {
    type: types.LOGOUT,
  }
};