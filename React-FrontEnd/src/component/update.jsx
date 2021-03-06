import React, { Component } from 'react';
import Axios from 'axios';
import Header from './header';
import Sidebar from './sidebar';
class Update extends Component {
  state = {
    projectName: '',
    projectDescription: ''
  };

  componentDidMount() {
    Axios.get(
      'http://localhost:8083/test/api/v1/project/' + this.props.match.params.id
    ).then(res => {
      this.setState({
        projectName: res.data.projectName,
        projectDescription: res.data.projectDescription
      });
    });
  }
  handleChange1 = e => {
    this.setState({ projectName: e.target.value });
  };

  handleChange2 = e => {
    this.setState({ projectDescription: e.target.value });
  };
  getlist = () => {
    this.props.history.push('/projectlist');
  };

  handleadd = e => {
    // e.preventDefault();
    Axios.put(
      'http://localhost:8083/test/api/v1/project/' + this.props.match.params.id,
      {
        projectName: this.state.projectName,
        projectDescription: this.state.projectDescription
      }
    ).then(result => {
      console.log('sgdfdg' + result);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div class='maindiv'>
          <div class='form-style-6'>
            <form onSubmit={this.handleadd}>
              <fieldset>
                <legend>
                  <span className='number'></span> Project Update
                </legend>
                <input
                  type='text'
                  name='projectName'
                  placeholder='Project Name*'
                  value={this.state.projectName}
                  onChange={this.handleChange1}
                />

                <textarea
                  name='projectDescription'
                  placeholder='Project Description'
                  value={this.state.projectDescription}
                  onChange={this.handleChange2}
                >
                  {' '}
                </textarea>
              </fieldset>

              <div className=''>
                <table>
                  <tr>
                    <th className='btn btn-primary' >
                      <input type='submit' value='Add' />
                    </th>
                    <th>
                      <input className='btn btn-info'
                        type='button'
                        value='back'
                        onClick={this.getlist}
                      />
                    </th>
                  </tr>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
