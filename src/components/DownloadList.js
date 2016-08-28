import React, { Component, PropTypes } from 'react';
import '../stylesheets/DownloadList.scss';

class DownloadList extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <ul className="downloadList">
        <li className="downloadList__item">
          <span className="video__name">videoname - asdasd</span>
          <span className="video__link"><a href="">Download</a></span>
        </li>
        <li className="downloadList__item">
          <span className="video__name">videoname - asdasd</span>
          <span className="video__link"><a href="">Download</a></span>
        </li>
        <li className="downloadList__item">
          <span className="video__name">videoname - asdasd</span>
          <span className="video__link"><a href="">Download</a></span>
        </li>
        <li className="downloadList__item">
          <span className="video__name">videoname - asdasd</span>
          <span className="video__link"><a href="">Download</a></span>
        </li>
      </ul>
    );
  }
}

DownloadList.propTypes = {
  name: PropTypes.string
};


export default DownloadList;
