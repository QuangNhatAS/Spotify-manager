import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Login from './Login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])
  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
