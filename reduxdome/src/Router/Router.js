import React,{Component} from "../../node_modules/react"
import {Switch,Route,Redirect} from '../../node_modules/react-router-dom'
import Home from '../components/main/home'
import Content from '../components/content/content';
import File from '../components/file/file'
import Detail from '../components/detail/detail'
export default class Router extends Component{
    render(){
        return(
            <div>
                
                <Switch>
                    <Route path="/"  exact>
                        <Redirect to="/home"></Redirect>
                </Route>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/Home" component={Home} ></Route>
                    <Route path="/Content/:id/:name" component={Content}>
                </Route>
                <Route path="/File" component={File}></Route>
                <Route path="/Detail/:id" component={Detail}></Route>
                </Switch>
            </div>
        )
    }
}
