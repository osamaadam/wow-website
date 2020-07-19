/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_arena_statsInstance, character_arena_statsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_arena_statsInstance, character_arena_statsAttribute>('character_arena_stats', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    slot: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    matchMakerRating: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    maxMMR: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'character_arena_stats'
  });
};
