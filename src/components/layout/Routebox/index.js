import React from 'react'

import {Switch,Route}from 'react-router-dom'

import Landing from '../../routes/Landing'
import Route1 from '../../routes/Route1'
import Route2 from '../../routes/Route2'
import Route3 from '../../routes/Route3'
import Route4 from '../../routes/Route4'

export default function index() {
    return (
        <div className='route-box'>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/route1' component={Route1} />
                <Route path='/route2' component={Route2} />
                <Route path='/route3' component={Route3} />
                <Route path='/route4' component={Route4} />
            </Switch>
        </div>
    )
}
