'use strict';

/**
 * centre service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::centre.centre');
