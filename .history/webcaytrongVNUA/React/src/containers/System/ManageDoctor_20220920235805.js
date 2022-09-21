import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import './ManageDoctor.scss';
import * as actions from "../../store/actions";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt();
function handleEditorChange({html, text}){
    console.log('check edit change', html, text);
}

 // nếu muốn import 1 function thì ta dùng dấu ngoặc nhọn
class ManageDoctor extends Component {
// PROPS stands for properties and is being used for passing data from one component to another.
// But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child)
   constructor(props) {
    super(props);
    this.state ={
       usersRedux: []
    }
   }
//để lưu giá trị của 1 biến components, ta dùng state
//Component là một block code độc lập để phân chia các UI (giao diện người dùng) thành các phân nhỏ riêng lẻ để dễ dàng quản lý và tái sử dụng.
     componentDidMount() {
      this.props.fetchUserRedux();
    }

componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.listUsers !== this.props.listUsers){
        this.setState({
            usersRedux: this.props.listUsers,
        })
    }
}

handleDeleteUser=(user)=>{
    this.props.deleteUserRedux(user.id);
}

handleEditUser =(user)=>{
    this.props.handleEditUserFromParentKey(user)
}
    render() {
        
     
        //khi muốn render ra 1 thứ gì đó trong react, chúng ta phải có hàm return, và trong đó bắt buộc là 1 khối
        let arrUsers = this.state.usersRedux;
        
        return (
<div className='manage-doctor'></div>
<div className="users-container">
             
         
           
           
             <div className="users-table mt-3 mx-1">
             <div className="title text-center">Manage Doctors with TaBaoPhuc</div>
                
             </div>
            </div>
            <MdEditor style ={{height:'500px'}} renderHTML={text=> mdParser.render(text)} onChange={handleEditorChange}/>

          
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);