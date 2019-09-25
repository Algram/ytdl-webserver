import React from 'react'

import '../stylesheets/DownloadForm.scss'

interface IDownloadFormProps {
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

class DownloadForm extends React.Component<IDownloadFormProps> {
  render () {

    const { onSubmit } = this.props;

    return (
      <form className='downloadForm' onSubmit={onSubmit}>
        <input className='downloadForm__input' type='text' />
        <button className='downloadForm__btn'>▶</button>
      </form>
    )
  }
}

export default DownloadForm
