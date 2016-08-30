import React, { Component, PropTypes } from 'react';
import '../stylesheets/DownloadForm.scss';

class DownloadForm extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <form className="downloadForm" onSubmit={this.props.onSubmit}>
        <input className="downloadForm__input" type="text" />
        <button className="downloadForm__btn">▶</button>
      </form>
    );
  }
}

DownloadForm.propTypes = {
  onSubmit: PropTypes.func
};


export default DownloadForm;
