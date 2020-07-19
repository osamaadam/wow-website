/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_skillsInstance, character_skillsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_skillsInstance, character_skillsAttribute>('character_skills', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    skill: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    max: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'character_skills'
  });
};
