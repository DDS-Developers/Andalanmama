import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  margin: 0 -10px;

  .button-arrow-prev {
    position: absolute;
    top: 50%;
    left: -78px;
    transform: translateY(-50%);
    z-index: 10;
  }

  .button-arrow-next {
    position: absolute;
    top: 50%;
    right: -78px;
    transform: translateY(-50%);
    z-index: 10;
  }
`;

export default SliderWrapper;
