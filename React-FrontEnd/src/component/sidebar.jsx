import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="sidebar">
               
           

           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
                <a className="fa fa-line-chart" href="#about"> Dashboard</a>
                
<div className="dropdown">
< a href="/project" className="fa fa-pencil-square-o"> Projects  <i className="fa fa-caret-down"></i></ a>
  <div className="dropdown-content">
    <a className="dtext" href="/project">Create New Project</a>
    <a className="dtext" href="/projectlist">Project List</a>
    </div>
  </div>

                <div  className="dropdown">
    
                < a href="/project" className=" fa fa-wrench"> Defect <i className="fa fa-caret-down"></i></ a>
                <div className="dropdown-content">
    <a className="dtext" href="/add">Add Defects</a>
    <a className="dtext" href="/prolist">Defect List</a>
    </div>
                </div>

                <br></br>
              

                <div className="dropdown">
                <a href="/user" className="fa fa-users"> Users <i className="fa fa-caret-down"></i></a>
                    <div className="dropdown-content">
                        <a href="/pfi">Profile</a>
                        <a href="/add">Privilages</a>
                        <a href="/exp">Experience</a>
                    </div>

                </div>


                <div className="dropdown">
                    <a href="/setting" className="fa fa-gear"> Settings</a>
                </div>

            </div>

         );
    }
}
 
export default Sidebar;