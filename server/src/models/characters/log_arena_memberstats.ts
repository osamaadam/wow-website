/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {log_arena_memberstatsInstance, log_arena_memberstatsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<log_arena_memberstatsInstance, log_arena_memberstatsAttribute>('log_arena_memberstats', {
    fight_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    member_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    team: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    account: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ip: {
      type: DataTypes.CHAR(15),
      allowNull: false
    },
    damage: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    heal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    kblows: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'log_arena_memberstats'
  });
};
