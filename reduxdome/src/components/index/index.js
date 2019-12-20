import React,{Component} from 'react';
import './index.css';
import 'antd/dist/antd.css';
import { Col,Layout,Tag,Card, Icon, Avatar } from 'antd';
import Main from '../../Router/Router'
import img1 from '../../static/images/微信图片_20191024111112.jpg'
import img2 from '../../static/images/微信图片_20191030140731.jpg'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { addTodo } from '../../Redux/actions'
import {Link,Switch} from "react-router-dom"

const { Header, Footer, Sider } = Layout;
const { Meta } = Card;
class Headero extends Component {
    idList(id,name) {
        this.props.history.push('/content/' + id+'/'+name)
        // console.log(this.props.history)
    }
    render() {

        let arr = [];
        let data = this.props.state.todos
        data.forEach((item, index) => {
            item.labels.forEach(q => {
                arr.push(q)
            })
        });
        // console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i].name == arr[j].name) {
                    arr.splice(j, 1);
                    j--;
                }
            }
        }

        return (
            <div className="App">
                <Layout className='Bg'>
                    <Header>
                        <Col className='head_right'>
                <Link to='/home' className='link'><Icon type="home" />首页</Link>
                <Link to='/file' className='link'><Icon type="diff" theme="filled" />归档</Link>

                        </Col>
                    </Header>
                    <Layout>
                    <Main/>
                        <Sider style={{marginLeft:20}}>
                            <Card
                                style={{ width: 250 }}
                                cover={<img
                                    alt="example"
                                    src={img1}
                                    style={{ height: 180 }}
                                />
                                }
                            >
                                <Meta avatar={<Avatar src={img2} className='img' />}
                                />
                                <p>David</p>
                                <p>Card content</p>
                                <p>文章-<span>27</span></p>
                                <p>博客已上线<span>27</span></p>
                                <p>其他项目：</p>
                                <p>1.前端导航</p>
                                <p>2.React脚手架</p>
                            </Card>

                            <Col style={{ width: 250 }}>
                                <Card title="Card title" bordered={false} >
                                    <div className='inco'>
                                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                            <Icon type="file-done" className='title' />
                                        </Col>
                                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                            <Icon type="github" theme="filled" className='title' />
                                        </Col>
                                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                            <Icon type="wechat" theme="filled" className='title' />
                                        </Col>
                                    </div>
                                </Card>
                            </Col>

                            <Col style={{ width: 250 }}>
                                <Card title="标签" bordered={false} >
                                    <div className='Tag'>
                                        {
                                            arr.map((i, index) => {
                                                return (
                                                    <Tag color={"#" + i.color} key={i.id} onClick={() => this.idList(i.id,i.name)}>{i.name}</Tag>
                                                    
                                                )
                                            })
                                        }
                                    </div>
                                </Card>
                            </Col>

                            <Col style={{ width: 250 }}>
                                <Card title="标签" bordered={false} >
                                    <div className='list'>
                                        <ul>
                                            <li>[重要通知!]博客升级2.0</li>
                                            <li>antd-moblie在create-react-app中安装使用</li>
                                            <li>在一台Mac.上不同平台同时使用多个Git账号</li>
                                            <li>手机端项目问题总结</li>
                                            <li>Git常用基础命令</li>
                                            <li>setState异步、 同步与进阶</li>
                                            <li>十大经典排序算法和使用场景</li>
                                            <li>代码整洁之道</li>
                                            <li>小程序开发基础知识</li>
                                            <li>ES5常用Array方法整理</li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                        </Sider>
                    </Layout>
                    <Footer></Footer>
                </Layout>

                <Switch>

                </Switch>
                
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
})(withRouter(Headero));
