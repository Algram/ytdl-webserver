/* global document */

import React from 'react';
import { render } from 'react-dom';
import DownloadPanel from './components/DownloadPanel';

render(
  <DownloadPanel />,
  document.getElementById('app')
);
