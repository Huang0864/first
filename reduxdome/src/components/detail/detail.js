import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './detail.css'
import {Card, Layout,Tag } from 'antd';
import { connect } from "react-redux"
import { addTodo } from '../../Redux/actions'
const { Content } = Layout;
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            flog: true
        }
    }
    render() {
        let routeId = parseInt(this.props.match.params.id);
        let data = this.props.state.todos.filter((item, index) => {
            return item.id == routeId
        })
        let str = data.map((i, x) => {
            return (
                i.body.split(/\#/)
            )
        })
        console.log(data)
        console.log(str)
        return (
                <Content>
                    <Card>
                    <div className='article'>
                {
                    data.map(item => {
                        let str1 = item.created_at.split('T');
                        return (
                            <div className='article_title'>
                                 <p style={{ fontSize: 25 }}>{item.title}</p>
                                 <p>发表于:{str1[0]}<span style={{ marginLeft: 20 }}>标签:</span>{
                                item.labels.map((a, b) => { 
                                    console.log(str1)
                                    return (
                                    <Tag color={"#" + a.color} key={a.id} style={{ marginLeft: 5 }}>{a.name}</Tag>
                                    
                                    )
                                })
                            }</p>
                                <div key={item.id} className='article_nr' >
                                    {
                                        item.body.split(/\n/).map((i, ind) => {
                                            return i.startsWith('###') ? (<p className="title" key={ind}>{i.substring(4)}</p>) : (<p key={ind}>{i}</p>)
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </Card>
        </Content>
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
})(Detail);