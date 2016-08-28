/* global document */

import React, { Component } from 'react';
import DownloadForm from './DownloadForm';
import DownloadList from './DownloadList';
import { post } from '../javascripts/helpers';
import '../stylesheets/DownloadPanel.scss';

const data = {
  videos: [
  ]
};

class DownloadPanel extends Component {
  constructor(props) {
    super(props);

    this.state = data;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const urlInput = document.querySelector('.downloadForm__input');
    const url = urlInput.value;
    urlInput.value = '';

    post('/download', `url=${url}`).then(response => {
      console.log('Success!', response);
    }, error => {
      console.log('Failed!', error);

      let videos = this.state.videos;
      this.setState({ videos: [{
        name: url,
        link: url,
        downloading: true
      }, ...videos] });

      // MOCK
      setTimeout(() => {
        const newVideo = {
          name: 'somerandomperson – hello',
          link: url,
          downloading: false
        };

        videos = this.state.videos;

        const updatedVideos = videos.map(video =>
          (video.link === newVideo.link ? Object.assign(video, newVideo) : video)
        );

        this.setState({ videos: updatedVideos });
      }, 3000);
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
