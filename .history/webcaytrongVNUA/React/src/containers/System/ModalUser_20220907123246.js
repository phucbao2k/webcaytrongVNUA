import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import{Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
toggle =()=>{
    this.props.toggleFromParent();
}
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={() =>{this.toggle()}} className={'modal-user-container'}
            size ="lg">
            <ModalHeader toggle={() =>{this.toggle()}}>ADD NEW USER:</ModalHeader>
            <ModalBody>
              
                <div className="modal-user-body">
                <div className="input-container max-width-input">
                        <label>Email</label>
                        <input type="text"></input>
                    </div>
                    <div className="input-container max-width-input">
                        <label>Password</label>
                        <input type="password"></input>
                    </div>
                    <div className="input-container max-width-input">
                        <label>First Name</label>
                        <input type="text"></input>
                    </div>
                    <div className="input-container max-width-input">
                        <label>Last Name</label>
                        <input type="text"></input>
                    </div>
                    <div className="input-container max-width-input">
                        <label>Address</label>
                        <input type="text"></input>
                    </div>
                </div>
                   
               
            </ModalBody>
        <ModalFooter>
            <Button color="primary" className="px-3" onClick={() =>{this.toggle()}}>Add new user</Button>
            <Button color="secondary" className="px-3" onClick={() =>{this.toggle()}}>Cancel</Button>
        </ModalFooter>
        </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



