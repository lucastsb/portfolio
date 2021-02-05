import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import About from '../src/components/RenderedComponents/About'
import Skills from '../src/components/RenderedComponents/Skills'
import Projects from '../src/components/RenderedComponents/Projects'
import Contact from '../src/components/RenderedComponents/Contact'
import ModalMenu from '../src/components/template/ModalMenu'

const Routes = () => {
 
    return(
        
        <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/Skills' component={Skills}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/ModalMenu' component={ModalMenu}/>
            <Redirect from='*' to='/'/>
        </Switch>
        
    )
}

export default Routes