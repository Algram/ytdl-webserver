import React, { Component, PropTypes } from 'react';
import DownloadForm from './DownloadForm';

const props = {

};

class DownloadPanel extends Component {
  componentDidMount() {
    console.log('asdasd', this.props.name);
  }

  render() {
    return (
      <div>DownloadPanel {this.props.name}
        <h1>{this.props.headline}</h1>
        <DownloadForm />
      </div>
    );
  }
}

DownloadPanel.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string
};


export default DownloadPanel;
