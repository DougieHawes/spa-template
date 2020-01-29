import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router}from 'react-router-dom'

import './style.css'

import Navbar from './components/layout/Navbar'
import Routebox from './components/layout/Routebox'

const App = ()=> <Router><div className='App'><Navbar/><Routebox/></div>
</Router>

ReactDOM.render(<App/>,document.getElementById('root'))