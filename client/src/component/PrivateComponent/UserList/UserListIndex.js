import React from 'react'

// importing all inner componentof user list page 
import ListHeader from './ListHeader'
import UserList from './UserList'

// import css
import './userlist.css'
const UserListIndex = () => {
    return (
        <div className="userList">
            <div className="userListComponent"> 
                <p>User List</p> 
                <div className="userListInnerComponent">
                    <ListHeader/>
                    <UserList/>
                </div>
            </div>
        </div>
    )
}

export default UserListIndex
