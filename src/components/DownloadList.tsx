import React from 'react'

import '../stylesheets/DownloadList.scss'

import { Video } from '../model';

interface IDownloadListProps {
  videos: Video[];
  onClearClick(e: React.MouseEvent): void;
  onVideoDownloadClick(e: React.MouseEvent):void;
}

const DownloadList: React.SFC<IDownloadListProps> = (props: IDownloadListProps) => (
      <ul className='downloadList'>
        {props.videos.map((video, index) =>
          <li key={index} className='downloadList__item'>
            <span className='video__name'>{video.name}</span>
            {video.downloading
              ? (
                <div className='spinner'>
                  <div className='bounce1' />
                  <div className='bounce2' />
                  <div className='bounce3' />
                </div>
              ) : (
                <span className='video__link'>
                  <a
                    onClick={props.onVideoDownloadClick}
                    data-orig={video.url}
                    href={`/request/${video.name}.${video.format}`}
                    download={`${video.name}.${video.format}`}
                  >Download</a>
                </span>
              )
            }
          </li>
        )}
        {Boolean(props.videos.length) &&
          <li className='downloadList__clear' onClick={props.onClearClick}>Clear all</li>}
      </ul>
    );


export default DownloadList;
