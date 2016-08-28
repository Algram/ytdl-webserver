import React, { Component, PropTypes } from 'react';

class DownloadForm extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <span>I am a DownloadForm</span>
    );
  }
}

DownloadForm.propTypes = {
  name: PropTypes.string
};


export default DownloadForm;
