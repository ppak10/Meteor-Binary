// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Root reducer to hold Redux reducers
// ----------------------------------------------------------------------------

export default (state = {}, {type, ...payload }) => {
  switch (type) {
    case 'ON_LOGIN':
      return { ...state, ...payload };
    case 'ON_LOGOUT':
      return { ...state, ...payload };
    default:
      return state;
  }
};
