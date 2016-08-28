import React, { Component, PropTypes } from 'react';
import DownloadForm from './DownloadForm';
import DownloadList from './DownloadList';
import '../stylesheets/DownloadPanel.scss';

const props = {

};

class DownloadPanel extends Component {
  componentDidMount() {
    console.log('asdasd', this.props.name);
  }

  render() {
    return (
      <div className="downloadPanel">
        <DownloadForm />
        <DownloadList />
      </div>
    );
  }
}

DownloadPanel.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string
};


export default DownloadPanel;
