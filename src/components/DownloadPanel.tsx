/* global document */

import React from 'react'
import { isURL } from 'validator'
import DownloadForm from './DownloadForm'
import DownloadList from './DownloadList'

import { post } from '../javascripts/helpers'
import localStorage from '../javascripts/localStorage'

import '../stylesheets/DownloadPanel.scss'

import { Video } from '../model'

interface IDownloadPanelState {
  videos: Video[];
}

class DownloadPanel extends React.Component<{}, IDownloadPanelState> {
  constructor (props: {}) {
    super(props)

    console.log(localStorage.getItem('videos'))
    const storedVideos = localStorage.getItem<any[]>('videos')

    this.state = { videos: storedVideos || [] }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleVideoDownloadClick = this.handleVideoDownloadClick.bind(this)
  }

  handleClearClick () {
    this.setState({ videos: [] })
    localStorage.removeItem('videos')
  }

  handleVideoDownloadClick (e: React.MouseEvent<Element>) {
    const videos = this.state.videos
    const videoUrl = e.currentTarget.getAttribute('data-orig')

    const updatedVideos = videos.filter(video => video.url !== videoUrl)

    this.setState({ videos: updatedVideos })

    // Can't use this.state.videos because this is bound to the function
    localStorage.setItem('videos', updatedVideos)
  }

  async handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    const urlInput = document.querySelector<HTMLInputElement>('.downloadForm__input')

    if (!urlInput) {
      return;
    }

    const url = urlInput.value

    if (url.length === 0) {
      return
    }

    urlInput.value = ''

    if (!isURL(url)) {
      urlInput.classList.add('downloadForm__input--error')
      urlInput.placeholder = 'Invalid URL'

      setTimeout(() => {
        urlInput.classList.remove('downloadForm__input--error')
        urlInput.placeholder = ''
      }, 2000)

      return
    }

    // Provide instant feedback by adding as much as we know to state
    this.setState({ 
      videos: [{ name: url, url, downloading: true }, ...this.state.videos]
    });

    try {

      const { videos } = this.state;
      const newVideo = await post<Video>('download', `url=${url}`)
  
      const updatedVideos = videos.map(video =>
        video.url === newVideo.url
          ? { ...video, ...newVideo, downloading: false }
          : video
      )
  
      this.setState({ videos: updatedVideos });
      localStorage.setItem('videos', updatedVideos);

    } catch (ex) {
      console.log('Failed!', ex);
    }
  }

  render () {
    return (
      <div className='downloadPanel'>
        <DownloadForm onSubmit={this.handleSubmit} />
        <DownloadList
          videos={this.state.videos}
          onClearClick={this.handleClearClick}
          onVideoDownloadClick={this.handleVideoDownloadClick}
        />
      </div>
    )
  }
}

export default DownloadPanel
