import React,{Component} from 'react';
import './home.css';
import 'antd/dist/antd.css';
import { Button,Pagination, Card,Icon,Layout, List} from 'antd';
import { connect } from "react-redux"
import { addTodo } from '../../Redux/actions'
const { Content } = Layout;

class mian extends Component {
    detail(id){
        this.props.history.push('/detail/'+id)
    }
    constructor(props){
        super(props)
        this.state = {
            data:[],
            flog:true
        }
       
       
    }
    onChange(page){ 
        console.log(this.state.data)
        let data = this.props.state.todos.filter((item, index) => {
            return item.author_association !== "NONE";
        });
        data = data.filter((item, index) => {
            return index < 8 * page && index >= 8 * (page - 1);
        });
        let flog = false;

        console.log(page)
        this.setState({
            data,
            flog
        });
    }

render() {
    let data = this.props.state.todos.filter((item, index) => {
        return item.author_association !== "NONE";
    });
    if(data.length!=0&&this.state.flog){
            this.onChange(1)
    }
return (
    <div className="App">
        <Content>
    <ul className='home'>
        {
        this.state.data.map((item, index) => {
            return (
                <li key={item.id} onClick={()=>{this.detail(item.id)}}>
                    <Card className='home_list'>
                        <p style={{fontSize:20,fontWeight:500}}>{item.title}</p>
                        <p className='icon_sp'><Icon type="schedule" className='icon' /> <span>{item.created_at}</span>
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
            <Pagination defaultCurrent={1} total={data.length} defaultPageSize={8} onChange={page => {
                this.onChange(page);
            }}
            />
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
