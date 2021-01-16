import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {getPosts} from './actions/posts';
import {setIsLoading} from "./actions/loading";
import Navbar from "./components/Navbar/Navbar";

import 'antd/dist/antd.css';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(getPosts())
    }, [dispatch])

    return (
        <BrowserRouter>
            <Layout className='app-layout'>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/auth' exact component={Auth}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    )
}

export default App;
