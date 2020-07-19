/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {log_arena_fightsInstance, log_arena_fightsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<log_arena_fightsInstance, log_arena_fightsAttribute>('log_arena_fights', {
    fight_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    winner: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    loser: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    winner_tr: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    winner_mmr: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    winner_tr_change: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    loser_tr: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    loser_mmr: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    loser_tr_change: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    currOnline: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'log_arena_fights'
  });
};
