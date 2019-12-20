import React, { Component } from 'react';
// import './home.css';
import 'antd/dist/antd.css';
import { Button, Pagination, Card, Icon, Layout } from 'antd';
import { connect } from "react-redux"
import { addTodo } from '../../Redux/actions'
const { Content } = Layout;

class mian extends Component {
    detail(id) {
        this.props.history.push('/detail/' + id)
    }
    constructor(props) {
        super(props);
        this.state = {
            idList: []
        }
    }
    componentDidMount() {
        let idList = this.props.state.todos
        this.setState({
            idList
        })
    }
    render() {
        let data = this.props.state.todos;
        let routeId = parseInt(this.props.match.params.id);
        let routeName = this.props.match.params.name;
        let TagInfo = [];
        data.forEach(item => {
            item.labels.forEach(i => {
                if (i.id === routeId) {
                    TagInfo.push(item);
                }
            });
        });

        console.log(TagInfo);
        return (
            <div className="App">
                <Content>
                    <ul className='home'>
                        {
                            TagInfo.map((item, index) => {
                                return (
                                    <li key={item.id} onClick={() => { this.detail(item.id) }}>
                                        <Card className='home_list'>
                                            <p style={{ fontSize: 20, fontWeight: 400 }}>标签:{routeName}</p>
                                            <p style={{ fontSize: 20, fontWeight: 400, color: '#5F5F5F' }}>{item.title}</p>
                                            <p className='icon_sp'>
                                                <Icon type="schedule" className='icon' style={{ paddingRight: 5 }} />
                                                <span>
                                                    {item.created_at}
                                                </span>
                                                <Icon type="tags" className='icon' />
                                                {
                                                    item.labels.map(i => {
                                                        return (
                                                            <Button type="primary" size="small" style={{ background: "#" + i.color, marginLeft: 5, border: 0 }} key={i.id}>
                                                                {i.name}
                                                            </Button>
                                                        )
                                                    })
                                                }
                                            </p>
                                            <p className='icon_text'>
                                                {item.body}
                                            </p>
                                        </Card>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Pagination defaultCurrent={1} total={50} />
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
})(mian);
