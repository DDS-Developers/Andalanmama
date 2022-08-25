import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DetailRecipeContainer from '../../../containers/DetailRecipe';
import PageWrapper from '../../components/Page/PageWrapper';
import PageInner from '../../components/Page/PageInner';
import PageContent from '../../components/Page/PageContent';
import Container from '../../components/Page/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaTag from '../../components/MetaTag';
import NotFoundPage from './NotFound';
import Modal from '../../components/Modal';

import Detail from './Detail';
import Ingredient from './Ingredient';
import Tutorial from './Tutorial';
import MoreRecipe from './MoreRecipe';
import Deco from './Deco';
import DecoLeft from './decoLeft.png';
import DecoRight from './decoRight.png';

import './modal-video.min.css';

// eslint-disable-next-line react/prefer-stateless-function
const DetailRecipeContent = p => {
  const [ctaDownload, setCtaDownload] = useState(true);

  const isAndroid = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    return userAgent.indexOf('android') > -1;
  };

  const { recipe } = p;

  return (
    <>
      <PageWrapper>
        {recipe ? (
          <MetaTag title={recipe.meta_title} description={recipe.meta_desc} image={recipe.image} />
        ) : null}
        <Deco>
          <img className="_deco-left" loading="lazy" src={DecoLeft} alt="" />
          <img className="_deco-right" loading="lazy" src={DecoRight} alt="" />
        </Deco>
        <PageInner>
          <Header hideHeader />
          {recipe ? (
            <PageContent>
              <Container>
                <Detail recipe={recipe} />
              </Container>
              <Ingredient ingredients={recipe.ingredient} />
              <Tutorial tutorials={recipe.step} recipe={recipe} />
              <MoreRecipe recipes={recipe.related} />
            </PageContent>
          ) : (
            <NotFoundPage />
          )}
          <Footer />
        </PageInner>
      </PageWrapper>
      {isAndroid() && ctaDownload ? (
        <Modal
          onClose={() => {
            setCtaDownload(false);
          }}
        />
      ) : null}
    </>
  );
};

DetailRecipeContent.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      fullname: PropTypes.string.isRequired,
    }),
    approved_at: PropTypes.string.isRequired,
    ingredient: PropTypes.array.isRequired,
    step: PropTypes.array.isRequired,
  }),
};

const DetailRecipe = props => <DetailRecipeContainer Layout={DetailRecipeContent} {...props} />;

export default DetailRecipe;
