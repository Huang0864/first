import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './file.css'
import { Button, Pagination, Card, Icon, Layout, Timeline } from 'antd';
import { connect } from "react-redux"
import { addTodo } from '../../Redux/actions'
const { Content } = Layout;
class File extends Component {
    render() {
        let data = this.props.state.todos;
        console.log(data)
        return (
            <div className="file">
                <Content>
                    <Card>
                        <p style={{fontSize:25,fontWeight:600}}>归档</p>
                        <Timeline style={{marginLeft:30}}>
                            {
                            data.map((item,index)=>{
                            let str = item.created_at.split('T');
                            // let arr = str.indexOf('T')
                            console.log(str)
                            return(
                            <Timeline.Item key={item.id}>{item.title}<span>{str[0]}</span></Timeline.Item>
                            )
                        })
                        }
                        </Timeline>,
                </Card>
                </Content>
            </div>
        )
    }
}
export default connect((state) => {
    return {
        state
    }

}, (dispatch) => {
    return {
        add: (text) => {
            dispatch(addTodo(text))
        }
    }
})(File);