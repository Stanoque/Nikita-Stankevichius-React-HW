const fetchSearchResults = (queryValues, type, search_endpoint, tokenType, accessToken, actionSuccess, actionFailure, dispatch, limit=20, offset=0) => {
  const q = queryValues.reduce((acc, queryValue) => {
    acc += `%20${queryValue}`;
    return acc;
  }, '')
  const searchLink = `${search_endpoint}?q=${q}&type=${type}&limit=${limit}&offset=${offset}`;
  fetch(searchLink, {
    headers: {
      'Authorization': `${tokenType} ${accessToken}`,
    }
  })
  .then(response => response.json())
  .then(decodedResponse => {
    dispatch(actionSuccess(decodedResponse));
  })
  .catch(error => {
    console.log(`Request failed, here's why: ${error}.`)
    dispatch(actionFailure(error));
  });
}

export default fetchSearchResults;