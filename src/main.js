/* global document */

import React from 'react';
import { render } from 'react-dom';
import DownloadPanel from './components/DownloadPanel';
import './stylesheets/global.scss';

render(
  <DownloadPanel />,
  document.getElementById('app')
);
