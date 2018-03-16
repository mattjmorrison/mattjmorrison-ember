/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'mattjmorrison-ember',
    locationType: 'none',
    environment,
    baseURL: '/mattjmorrison-ember',
    rootURL: '/',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {
    }
  };

  if (environment === 'test') {
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/mattjmorrison/mattjmorrison-ember';
    ENV.locationType = 'hash';
  }

  return ENV;
};
