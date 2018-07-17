import React, { Component } from 'react';
import '../../pages/Home/Home.scss';
import Test from '../../components/test/Test.js';
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props) {

    super(props);
    this.state = {
    }
  }

  render () {
    return (
    <div>
		Welcome to React-Node-Starter!
		<Test />
    </div>
    )
  }
}

const mapStateToProps = state => {
	return {
	};
}

const mapDispatchToProps = dispatch => {
	return {
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);