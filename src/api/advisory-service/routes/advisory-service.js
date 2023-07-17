'use strict';

/**
 * advisory-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::advisory-service.advisory-service');
