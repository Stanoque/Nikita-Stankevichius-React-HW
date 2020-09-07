import React, {useState, useEffect, useCallback} from 'react';
import {client_id, client_secret, redirect_uri, auth_link, token_link, search_endpoint} from '../../constants/userCredentials';
import { getAccessToken } from '../../actions/authActions';

const Authentificator = () => {
  const [isLogged, setLogin] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [tokenType, setTokenType] = useState(null);

  useEffect(() => {
    const loginResponseCode = window.location.search;
    const authorizationCode = loginResponseCode.split('&')[0].replace('?code=', '');

    console.log(`Access token: ${accessToken}\nRefresh Token: ${refreshToken}\nToken Type: ${tokenType}`);

    if(loginResponseCode) {
      setLogin(true);
    }
    
    if(isLogged) {
      if(!accessToken) {
        const tokenPostLink = `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirect_uri}`;
        fetch(token_link, {
          method: 'POST',
          body: tokenPostLink,
          headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(response => response.json())
        .then(decodedResponse => {
          const {access_token, refresh_token, token_type} = decodedResponse;
          setAccessToken(access_token);
          setRefreshToken(refresh_token);
          setTokenType(token_type);
          getAccessToken(access_token, refresh_token, token_type);
        })
        .catch(error => console.log(`Request failed, here's why: ${error}.`));
      } 
    } 


  });

  const getRefreshedToken = () => {
    const tokenRefreshLink = `grant_type=refresh_token&refresh_token=${refreshToken}`;
    fetch(token_link, {
      method: 'POST',
      body: tokenRefreshLink,
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => response.json())
    .then(decodedResponse => {
      const {access_token, token_type} = decodedResponse;
      setAccessToken(access_token);
      setTokenType(token_type);
    })
    .catch(error => console.log(`Request failed, here's why: ${error}.`));
  }


  return (
    <div className="authentificator">
      {isLogged ?
        <div>
          <button onClick={getRefreshedToken} className="btn btn-primary">Refresh</button>
          <button onClick={()=>{}} className="btn btn-secondary">Search</button>
        </div>
        :
        <a href={auth_link}>Log In</a>
      }
    </div> 
  )
}

export default Authentificator;