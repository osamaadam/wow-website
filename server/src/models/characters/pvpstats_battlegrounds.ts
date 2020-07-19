/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pvpstats_battlegroundsInstance, pvpstats_battlegroundsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<pvpstats_battlegroundsInstance, pvpstats_battlegroundsAttribute>('pvpstats_battlegrounds', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    winner_faction: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    bracket_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pvpstats_battlegrounds'
  });
};
