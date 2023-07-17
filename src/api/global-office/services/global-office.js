'use strict';

/**
 * global-office service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-office.global-office');
