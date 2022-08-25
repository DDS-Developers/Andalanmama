/* eslint-disable prettier/prettier */
import path from 'path';
import fs from 'fs';
import express from 'express';
import chalk from 'chalk';
import logger from 'morgan';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import configureStore from '../store';
import Routes, { router } from './routes';
import { Http } from '../services/http';

const { store } = configureStore();
const server = express();

Http.init();

server.use(logger('dev'));
server.set('host', process.env.APP_HOST || 'localhost');
server.set('port', process.env.APP_PORT || 4000);
server.set('app_url', process.env.APP_URL || 'http://localhost:4000');

server.use(express.static('./build', { index: '_' }));

server.get('*', (req, res) => {

  const context = {}

  const fetching = router
    .map(route => route.component().type)
    // .filter(comp => comp.serverFetch)
    // .map(comp => comp.serverFetch.map(loadData => store.dispatch(loadData())))

  Promise.all(fetching)
    .then(() => {
      const Rendering = () => (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Routes />
          </StaticRouter>
        </Provider>
      );

      const indexFile = path.resolve('./build/main.html');
      fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }

        if (context.status === 404) {
          res.status(404);
        }

        if (context.url) {
          return res.redirect(301, context.url);
        }

        return res.send(
          data.replace(
            `<div id="root"></div>`,
            `
              <div id="root">${ReactDOMServer.renderToString(<Rendering />)}</div>
              <script>window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}</script>
            `,
          ),
        );
      });
    })
    // eslint-disable-next-line no-unused-vars
    .catch(error =>
      // console.log(error)
      res.status(500).send('Oops, better luck next time!')
    )
})

server.listen(server.get('port'), () => {
  console.log(
    '%s App is running at %s in %s mode',
    chalk.green('✓'), server.get('app_url'), server.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
})
