/* global document */

import React, { Component } from 'react';
import DownloadForm from './DownloadForm';
import DownloadList from './DownloadList';
import { post } from '../javascripts/helpers';
import { isURL } from 'validator';
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

    if (!isURL(url)) {
      urlInput.classList.add('error');
      console.log('not valid');
      return;
    }

    // Provide instant feedback by adding as much as we know to state
    let videos = this.state.videos;
    this.setState({ videos: [{
      name: url,
      url,
      downloading: true
    }, ...videos] });

    post('/download', `url=${url}`).then(newVideo => {
      videos = this.state.videos;

      const updatedVideos = videos.map(video =>
        (video.url === newVideo.url ? Object.assign({}, video, newVideo) : video)
      );

      this.setState({ videos: updatedVideos });
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

export default DownloadPanel;
