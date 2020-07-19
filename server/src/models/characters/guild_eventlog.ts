/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {guild_eventlogInstance, guild_eventlogAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<guild_eventlogInstance, guild_eventlogAttribute>('guild_eventlog', {
    guildid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'Guild Identificator'
    },
    LogGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'Log record identificator - auxiliary column'
    },
    EventType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: 'Event type'
    },
    PlayerGuid1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: 'Player 1'
    },
    PlayerGuid2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: 'Player 2'
    },
    NewRank: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: 'New rank(in case promotion/demotion)'
    },
    TimeStamp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: 'Event UNIX time'
    }
  }, {
    sequelize,
    tableName: 'guild_eventlog'
  });
};
