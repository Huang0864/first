import {connect} from "react-redux"
import App from "../App"
import {addTodo} from './actions'
export default  connect((state)=>{
    return{
        state
        }
    },(dispatch)=>{
        return {
            add:(text)=>{
            dispatch(addTodo(text))
            }
        }
    })(App);