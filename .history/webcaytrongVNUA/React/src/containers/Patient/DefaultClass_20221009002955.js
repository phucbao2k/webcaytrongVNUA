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
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                id: '',
                email: '',
                password: '',
                firstName: '',
                lastName: ' ',
                address: ''
            })
        })
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            {
                this.setState({
                    id: user.id,
                    email: user.email,
                    password: 'hardcode',
                    firstName: user.firstName,
                    lastName: user.lastName,
                    address: user.address
                })
            }
        }
    }
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //gọi api để tạo modal
            this.props.editUser(this.state);
        }
    }
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg">
                <ModalHeader toggle={() => { this.toggle() }}>EDIT USER:</ModalHeader>
                <ModalBody>

                    <div className="modal-user-body">
                        <div className="input-container ">
                            <label>Email</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.email}
                                disabled>
                            </input>
                        </div>
                        <div className="input-container ">
                            <label>Password</label>
                            <input type="password"
                                onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            ></input>
                        </div>
                        <div className="input-container ">
                            <label>First Name</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                value={this.state.firstName}></input>
                        </div>
                        <div className="input-container ">
                            <label>Last Name</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                value={this.state.lastName}></input>
                        </div>
                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                value={this.state.address}></input>
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => { this.handleSaveUser() }}>Save Changes</Button>
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);




