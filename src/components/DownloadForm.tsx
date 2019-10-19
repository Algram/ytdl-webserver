import React from 'react'
import PropTypes, {InferProps}  from 'prop-types'
import '../stylesheets/DownloadForm.scss'

function DownloadForm({onSubmit}: InferProps<typeof DownloadForm.propTypes>) {
  return (
    <form className='downloadForm' onSubmit={onSubmit}>
      <input className='downloadForm__input' type='text'/>
      <button className='downloadForm__btn'>▶</button>
    </form>
  )
}

DownloadForm.propTypes = {
  onSubmit: PropTypes.func
}

export default DownloadForm
