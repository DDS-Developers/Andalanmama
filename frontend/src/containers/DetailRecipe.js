import React from 'react';
import PropTypes from 'prop-types';
import nprogress from 'nprogress';
import Loading from '../web/components/Loading';

// import storage from '../db';
import ApiRecipe from '../services/api/recipe';

class DetailRecipe extends React.Component {
  state = {
    recipe: null,
    notFound: false,
  };

  componentDidMount() {
    const { match } = this.props;
    this.fetch(match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetch(this.props.match.params.id);
    }
  }

  fetch = id => {
    nprogress.start();
    this.setState({ recipe: null, notFound: false });
    ApiRecipe.getRecipe(id)
      .then(response => {
        this.setState({
          recipe: response.data,
          notFound: false,
        });
        window.scrollTo(0, 0);
        nprogress.done();
      })
      .catch(() => {
        this.setState({
          notFound: true,
        });
        window.scrollTo(0, 0);
        nprogress.done();
      });
  };

  render() {
    const { Layout, ...others } = this.props;
    const { recipe, notFound } = this.state;

    if (recipe === null && notFound === false) {
      return <Loading />;
    }

    return <Layout recipe={recipe} {...others} />;
  }
}

DetailRecipe.propTypes = {
  Layout: PropTypes.func,
  match: PropTypes.object,
};

export default DetailRecipe;
