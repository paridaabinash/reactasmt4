import React from 'react';

const Student = () => {
  return (
    <div className="table__container">
        <div className="student__page__head">
            <h1>Students details</h1>
            <button className='add__btn'>Add New Student</button>
        </div>
        <table>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Course</td>
                <td>Batch</td>
                <td>Update</td>
            </tr>
            <tr>
                <td>J Jonah Jameson</td>
                <td>34</td>
                <td>MERN</td>
                <td>January</td>
                <td><a href="/student">Edit</a></td>
            </tr>
            <tr>
                <td>Klaus Mikaelson</td>
                <td>1074</td>
                <td>MERN</td>
                <td>August</td>
                <td><a href="/student">Edit</a></td>
            </tr>
            <tr>
            <td>Kal El</td>
                <td>30</td>
                <td>MERN</td>
                <td>December</td>
                <td><a href="/student">Edit</a></td>
            </tr>
            <tr>
            <td>Oliver Queen</td>
                <td>26</td>
                <td>MERN</td>
                <td>February</td>
                <td><a href="/student">Edit</a></td>
            </tr>
        </table>
        </div>
  )
}

export default Student;