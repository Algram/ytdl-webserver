/* global document */

import React from 'react'
import { render } from 'react-dom'
import DownloadPanel from './components/DownloadPanel'
import './stylesheets/shared.scss'

render(
  <DownloadPanel />,
  document.getElementById('app')
)
