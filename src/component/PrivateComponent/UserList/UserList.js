import React from 'react'
import './userlist.css'
const UserList = () => {
    const users = [
        {name: 'MD. Alamin Hossen ',email: 'alamin@gmail.com',mobile:'01722906894', status: 'Active', joiningDate: '2020-09-22 14:34:23', },
        { name: 'MD. Alamin Hossen ',email: 'alamin@gmail.com',mobile:'01722906894', status: 'Active', joiningDate: '2020-09-22 14:34:23', },
        { name: 'MD. Alamin Hossen ',email: 'alamin@gmail.com',mobile:'01722906894', status: 'Active', joiningDate: '2020-09-22 14:34:23', },
        { name: 'MD. Alamin Hossen ',email: 'alamin@gmail.com',mobile:'01722906894', status: 'Active', joiningDate: '2020-09-22 14:34:23', },
       { name: 'MD. Alamin Hossen ',email: 'alamin@gmail.com',mobile:'01722906894', status: 'Blocked', joiningDate: '2020-09-22 14:34:23', }
    ]
    return (
        <div className="UserListTable">
            <table className="table table-borderless">
                <thead className="tableHead">
                    <tr>
                        <td scope="col">Name</td>
                        <td scope="col">Email</td>
                        <td scope="col">Mobile</td>
                        <td scope="col">Status</td>
                        <td scope="col">Joining Date</td>
                        <td scope="col">Action</td>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {
                        users.map(single => {
                            return (
                                <tr className="tableRow">
                                    <td >
                                        <img style={{maxWidth:'48px',marginRight:'15px',borderRadius:'100%'}} src={require('../../img/user.png')}/>
                                        {single.name} 
                                    </td>
                                    <td className="location" >{single.email} </td>
                                    <td>{single.mobile}</td>
                                    <td className={single.status=='Active'?'statusBtn':'blockBtn'} > <span>{single.status}</span> </td>
                                    <td>{single.joiningDate}</td>
                                    <td className="action">
                                        <div className="sms">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <div className="exit">
                                            <i class="fas fa-external-link-alt"></i>
                                        </div>
                                        <div className="delete">
                                            <i class="far fa-trash-alt"></i>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="pagination">
                <ul>
                    <li><a href="">
                        <i class="fas fa-angle-left"></i>                    </a></li>
                    <li className="activePage"><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">6</a></li>
                    <li><a href="">
                        <i class="fas fa-angle-right"></i>
                    </a></li>
                </ul>
            </div>


        </div>
    )
}

export default UserList
