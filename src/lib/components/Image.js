import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ dataUri }) => {
  // if no dataUri or dataUri is data empty, use gif blank 1px
  let dataUriImage = (!dataUri || dataUri === 'data:,')
    ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    : dataUri;
  return (
    <div>

      <img alt="camera" src={dataUriImage}/>
    </div>
  );
};

Image.propTypes = {
  dataUri: PropTypes.string.isRequired
};

export default Image;
