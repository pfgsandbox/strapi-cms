'use strict';

/**
 * advisory-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advisory-service.advisory-service');
