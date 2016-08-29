/* global document */

import React, { Component } from 'react';
import DownloadForm from './DownloadForm';
import DownloadList from './DownloadList';
import { post } from '../javascripts/helpers';
import '../stylesheets/DownloadPanel.scss';

class DownloadPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const urlInput = document.querySelector('.downloadForm__input');
    const url = urlInput.value;

    if (url.length === 0) {
      return;
    }

    urlInput.value = '';

    post('/download', `url=${url}`).then(response => {
      console.log('Success!', response);

      let videos = this.state.videos;
      this.setState({ videos: [{
        name: url,
        url,
        downloading: true
      }, ...videos] });

      // MOCK
      setTimeout(() => {
        const newVideo = {
          name: 'somerandomperson – hello',
          url,
          downloading: false
        };

        videos = this.state.videos;

        // TODO remove Object.assign since no fields are getting updated
        const updatedVideos = videos.map(video =>
          (video.url === newVideo.url ? Object.assign({}, video, newVideo) : video)
        );

        this.setState({ videos: updatedVideos });
      }, 3000);
    }, error => {
      console.log('Failed!', error);
    });
  }

  render() {
    return (
      <div className="downloadPanel">
        <DownloadForm onSubmit={this.handleSubmit} />
        <DownloadList videos={this.state.videos} />
      </div>
    );
  }
}

DownloadPanel.propTypes = {
};


export default DownloadPanel;
