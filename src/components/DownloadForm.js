import React, { Component, PropTypes } from 'react';
import '../stylesheets/DownloadForm.scss';

class DownloadForm extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <form className="downloadForm" action="">
        <input className="downloadForm__input" type="text" />
        <button>▶</button>
      </form>
    );
  }
}

DownloadForm.propTypes = {
  name: PropTypes.string
};


export default DownloadForm;
