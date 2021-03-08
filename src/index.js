import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CardList from './CardList';
import App from './App';//v dalsi fazi nahrazujeme CardList za jeste vetsi a nadrazenejsi App
import 'tachyons';

ReactDOM.render(<App/>,
    document.getElementById('root'));

    //puvodne byla kazda karta zvlast:
    //<Card name={robots[0].name} username={robots[0].username} email={robots[0].email}...
    //<Card name={robots[1].name} username={robots[1].username} email={robots[1].email}...
    //...