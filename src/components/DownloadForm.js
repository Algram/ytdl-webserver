import React, { Component, PropTypes } from 'react';

class DownloadForm extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <form action="">
        First name:<br />
        <input type="text" name="firstname" value="" />
      </form>
    );
  }
}

DownloadForm.propTypes = {
  name: PropTypes.string
};


export default DownloadForm;
