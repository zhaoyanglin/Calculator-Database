import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.getList()
  }

  state = {
    firstValue: '',
    secondValue: '',
    result: '',
    operation: '',
  }

  getList = () => {
    this.props.dispatch({ type: 'FETCH_LIST'});
  }

  handleChangFor = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  onChangeOperation = (key) => {
    this.setState({
      operation: key,
    })
  }

  onclickClear = () => {
    this.setState({
      firstValue: '',
      secondValue: '',
      result: '',
      operation: '',
    })
  }

  onClick = () => {
    if (this.state.firstValue === '' || this.state.secondValue === ''){
      alert("PLEASE FILL IN BOTH INPUTS BEFORE CONTINUING!!!!!!!!")
    }
      else if (this.state.operation === '+') {
      this.setState({
        result: Number(this.state.firstValue) + Number(this.state.secondValue)
      }, () => {
        this.postToSaga()
      })

    } else if (this.state.operation === '-') {
      this.setState({
        result: this.state.firstValue - this.state.secondValue
      }, () => {
        this.postToSaga()
      })

    } else if (this.state.operation === '*') {
      this.setState({
        result: this.state.firstValue * this.state.secondValue

      }, () => {
        this.postToSaga()
      })

    } else if (this.state.operation === '/') {
      this.setState({
        result: this.state.firstValue / this.state.secondValue

      }, () =>{
        this.postToSaga()
      })
    }
  }
  
  postToSaga = () => {
    this.props.dispatch({ type: 'POST_RESULT', payload: this.state })
  }

render() {
  console.log(this.state.operation);
  console.log(this.state);
  console.log('this is the response data====================', this.props.reduxState.calculatorReducer);

  let TopTenList = null;
  TopTenList = this.props.reduxState.calculatorReducer.map((data,i) => {
    return (
      <li key={i} >{data.first_value} {data.operation} {data.second_value} = {data.result}</li>
    )
  })

  return (

    <div className="App" >

      <div>
        <input id='fisrtVal' placeholder='first value' onChange={this.handleChangFor('firstValue')} value={this.state.firstValue} />

        <br />

        <button onClick={() => this.onChangeOperation('+')}>+</button>
        <button onClick={() => this.onChangeOperation('-')}>-</button>
        <button onClick={() => this.onChangeOperation('*')}>*</button>
        <button onClick={() => this.onChangeOperation('/')}>/</button>

        <br />

        <input id='secondVal' placeholder='second value' onChange={this.handleChangFor('secondValue')} value={this.state.secondValue} />

        <br />
        
        <button onClick={() => this.onClick()} > = </button>

        <button onClick={() => this.onclickClear()}>C</button>
      </div>

      <br />

      <div>
        <ul>
          {TopTenList}
        </ul>
      </div>

    </div>
  );
}
}

const mapStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapStateToProps)(App);
