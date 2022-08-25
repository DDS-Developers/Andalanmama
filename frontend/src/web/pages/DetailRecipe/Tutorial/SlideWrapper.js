import styled from 'styled-components';

const SlideWrapper = styled.div`
  position: relative;
  padding: 0 10px;

  ._inner {
    display: flex;
    align-items: center;
    margin: 0 -20px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      margin: 0 auto;
      max-width: 540px;
    }

    ._info,
    ._image {
      width: 50%;
      padding: 20px;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0;
      }
    }

    ._image {
      @media (max-width: 768px) {
        margin-bottom: 40px;
      }

      img {
        width: 100%;
      }
    }

    ._info--title {
      margin-bottom: 30px;
      font-weight: bold;
    }
  }
`;

export default SlideWrapper;
