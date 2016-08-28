/* global document */

import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import DownloadPanel from './components/DownloadPanel';

class Hello extends React.Component {
  componentDidMount() {
    console.log('asdasd');
  }

  render() {
    return (
      <div>Hello {this.props.name}
        <h1>{this.props.headline}</h1>
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string
};

render(
  <DownloadPanel />,
  document.getElementById('app')
);
