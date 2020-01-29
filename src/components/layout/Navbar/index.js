import React from 'react'
import {Link}from 'react-router-dom'

export default function index() {
    return (
        <div className='navbar'>
            <div className='name-box'>
                <Link to='/'><h1>name</h1></Link>
            </div>
            <div className='links'>
                <Link to='/route1'>route1</Link>
                <Link to='/route2'>route2</Link>
                <Link to='/route3'>route3</Link>
                <Link to='/route4'>route4</Link>
            </div>
        </div>
    )
}
