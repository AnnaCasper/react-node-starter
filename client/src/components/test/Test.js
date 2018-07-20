import React, { Component } from 'react';
// import '../../pages/Home/Home.scss';
import { connect } from 'react-redux';
import testApi from '../../api/testApi';

class Test extends Component {
    constructor(props) {
      super(props);

        this.state = {
			testData: []
		}
	}
	
	componentDidMount() {
		testApi.getTest().then(test => {
			this.props.setTestData(test)
		})
	}

	componentDidUpdate(prevProps) {
		if(prevProps.testData !== this.props.testData) {
			this.setState({
				testData: this.props.testData
			});
		}
	}

    render() {
        return (
            <div>
                Test data: {this.state.testData.map(data => {
					return data.text
				})}
            </div>
        )
    }
}

const mapStateToProps = state => {
	return {
		testData: state.test.testData
	};
}

const mapDispatchToProps = dispatch => {
	return {
		setTestData: test => {
			dispatch({type: 'SET_TEST_DATA', payload: test})
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);