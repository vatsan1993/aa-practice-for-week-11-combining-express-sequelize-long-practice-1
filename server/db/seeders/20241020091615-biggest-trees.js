'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = [
      {
        tree: 'General Sherman',
        location: 'Sequoia National Park',
        heightFt: 274.9,
        groundCircumferenceFt: 102.6,
      },
      {
        tree: 'General Grant',
        location: 'Kings Canyon National Park',
        heightFt: 268.1,
        groundCircumferenceFt: 107.5,
      },
      {
        tree: 'President',
        location: 'Sequoia National Park',
        heightFt: 240.9,
        groundCircumferenceFt: 93,
      },
      {
        tree: 'Lincoln',
        location: 'Sequoia National Park',
        heightFt: 255.8,
        groundCircumferenceFt: 98.3,
      },
      {
        tree: 'Stagg',
        location: 'Private Land',
        heightFt: 243,
        groundCircumferenceFt: 109,
      },
    ];
    await queryInterface.bulkInsert('Trees', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    let filterTrees = [
      'General Sherman',
      'General Grant',
      'President',
      'Lincoln',
      'Stagg',
    ];
    await queryInterface.bulkDelete('People', { tree: filterTrees }, {});
  },
};
