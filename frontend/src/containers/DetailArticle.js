import React from 'react';
import PropTypes from 'prop-types';
import nprogress from 'nprogress';
import Loading from '../web/components/Loading';

import ApiArticle from '../services/api/article';

class DetailArticle extends React.Component {
  state = {
    article: null,
    loading: true,
  };

  componentDidMount() {
    const { match } = this.props;

    this.loadArticle(match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadArticle(this.props.match.params.id);
    }
  }

  loadArticle = id => {
    nprogress.start();
    this.setState({ article: null, loading: true });
    ApiArticle.getArticle(id)
      .then(response => {
        this.setState({
          article: response.data,
        });

        window.scrollTo(0, 0);
        nprogress.done();
      })
      .catch(() => {
        this.setState({ article: null, loading: false });
        window.scrollTo(0, 0);
        nprogress.done();
      });
  };

  render() {
    const { Layout, ...others } = this.props;
    const { article, loading } = this.state;
    if (article === null && loading === true) {
      return <Loading />;
    }

    return <Layout article={article} {...others} />;
  }
}

DetailArticle.propTypes = {
  Layout: PropTypes.func,
};

export default DetailArticle;
