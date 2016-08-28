import React, { Component, PropTypes } from 'react';

class DownloadList extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <span>I am a DownloadList</span>
    );
  }
}

DownloadList.propTypes = {
  name: PropTypes.string
};


export default DownloadList;
