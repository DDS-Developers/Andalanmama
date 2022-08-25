import ReactLoadable from 'react-loadable';
import NProgress from '../components/NProgress';

const Loadable = opts =>
  ReactLoadable({
    loading: NProgress,
    delay: 200,
    timeout: 10000,
    loader: opts,
  });

export default Loadable;
