import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//COMPONENTS

import CSStransition from './component/CSStransition';
import Tgroup from './component/tgroup';
import TransitionComp from './component/Transition';
import User from './component/user';

const App = () => {

    return(
        <BrowserRouter>
            <div>
                <div className="anim_index">
                    <Link to="/transition">Transition</Link>
                    <Link to="/csstransition">CSSTransition</Link>
                    <Link to="/tgroup">Transitions group</Link>
                    <Link to="/user">PT User</Link>
                </div>
                <Route path="/transition" component={TransitionComp}></Route>
                <Route path="/csstransition" component={CSStransition}></Route>
                <Route path="/tgroup" component={Tgroup}></Route>
                <Route path="/user" component={User}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App;
