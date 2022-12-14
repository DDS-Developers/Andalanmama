import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 120px 0 0;

  @media (max-width: 480px) {
    margin: 30px 0 0;
  }

  > span {
    display: none;
    text-align: center;
    padding-bottom: 30px;

    @media (max-width: 480px) {
      display: block;
    }
  }

  ._section--favorite--more {
    margin-top: 50px;
    text-align: center;
  }

  .slick-slider {
    .button-arrow-prev {
      left: 78px;
    }
    .button-arrow-next {
      right: 78px;
    }
  }
  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 10px;
    height: 10px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 10px;

    position: absolute;
    top: 0;
    left: 0;

    width: 10px;
    height: 10px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`;

export default Wrapper;
