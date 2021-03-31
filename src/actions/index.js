export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
});


// Login
export const loginRequest = payload => ({
  type: 'LOOGIN_REQUEST',
  payload,
});