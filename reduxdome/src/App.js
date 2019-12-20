import React,{Component} from 'react';
import './App.css';
import Axios from 'axios'
import Index from './components/index/index'
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const _this = this;
    Axios.get('https://api.github.com/repos/Will0319/blog/issues')
      .then(function(response) {
        // _this.setState({
        //  blog_data:response.data
        // })
        _this.props.add(response.data)
        console.log(_this.props)
      })
      .catch(function (error) { 
        _this.setState({
          error:error
        })
      })
  }

  render() {

    return (
      <div className="App">
        <Index></Index>
      </div>
    )
  }
}
export default App;
