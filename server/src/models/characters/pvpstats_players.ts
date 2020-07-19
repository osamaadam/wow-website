/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pvpstats_playersInstance, pvpstats_playersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<pvpstats_playersInstance, pvpstats_playersAttribute>('pvpstats_players', {
    battleground_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    character_guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    winner: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    score_killing_blows: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    score_deaths: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    score_honorable_kills: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    score_bonus_honor: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    score_damage_done: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    score_healing_done: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    },
    attr_1: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    attr_2: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    attr_3: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    attr_4: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    attr_5: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pvpstats_players'
  });
};
