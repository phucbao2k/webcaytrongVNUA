import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


//lodash hỗ trợ ta kiểm tra và thao tác với mảng dễ dàng hơn

class DefaultClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }

    }
  

   async componentDidMount() {
       
    }
    async componentDidUpdate(prevProps, prevState,snapshot) {
if(this.)
    }
   
   
    render() {
        return (
           <div></div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);




