import React from 'react';
import Wrapper from './Wrapper';
import Logo from './logo.png';

const Loading = () => (
  <Wrapper>
    <div className="wrapper-loading">
      <img src={Logo} alt="Logo loading" width={240} />
      <p>Loading ...</p>
    </div>
  </Wrapper>
);

export default Loading;
