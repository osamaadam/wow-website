/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {guild_memberInstance, guild_memberAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<guild_memberInstance, guild_memberAttribute>('guild_member', {
    guildid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: 'Guild Identificator'
    },
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    pnote: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    offnote: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'guild_member'
  });
};
