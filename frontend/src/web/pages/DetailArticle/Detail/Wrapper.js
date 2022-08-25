import styled from 'styled-components';

const DetailWrapper = styled.div`
  position: relative;
  max-width: 760px;
  margin: auto;
  padding: 0 30px;
  @media (max-width: 767px) {
    margin: -40px 0;
  }
  ._featured--image {
    img {
      box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);
    }
  }
  hr {
    margin: 40px 0;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 5px;
    @media (max-width: 991px) {
      height: 50vw;
    }
  }
`;

export default DetailWrapper;
