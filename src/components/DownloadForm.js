/* global document */

import React, { Component, PropTypes } from 'react';
import '../stylesheets/DownloadForm.scss';

class DownloadForm extends Component {
  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = document.querySelector('.downloadForm__input');
    console.log('url', url.value);
  }

  render() {
    return (
      <form className="downloadForm" onSubmit={this.handleSubmit}>
        <input className="downloadForm__input" type="text" />
        <button className="downloadForm__btn">▶</button>
      </form>
    );
  }
}

DownloadForm.propTypes = {
  name: PropTypes.string
};


export default DownloadForm;
