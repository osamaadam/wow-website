/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_queststatus_monthlyInstance, character_queststatus_monthlyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_queststatus_monthlyInstance, character_queststatus_monthlyAttribute>('character_queststatus_monthly', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    quest: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Quest Identifier'
    }
  }, {
    sequelize,
    tableName: 'character_queststatus_monthly'
  });
};
