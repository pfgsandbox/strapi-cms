'use strict';

/**
 * leadspace service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leadspace.leadspace');
