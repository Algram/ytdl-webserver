import React, { Component, PropTypes } from 'react';
import '../stylesheets/DownloadList.scss';

class DownloadList extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <ul className="downloadList">
        {this.props.videos.map((video, index) =>
          <li key={index} className="downloadList__item">
            <span className="video__name">{video.name}</span>
            {(video.downloading) ?
              <div className="spinner">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
              </div>
              :
              <span className="video__link">
                <a
                  href={`/request/${video.name}.${video.format}`}
                  download={`${video.name}.${video.format}`}
                >Download</a>
              </span>
            }
          </li>
        )}
        <li className="downloadList__clear" onClick={this.props.onClearClick}>Clear all</li>
      </ul>
    );
  }
}

DownloadList.propTypes = {
  videos: PropTypes.array,
  onClearClick: PropTypes.func
};


export default DownloadList;
