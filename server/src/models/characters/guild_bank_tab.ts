/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {guild_bank_tabInstance, guild_bank_tabAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<guild_bank_tabInstance, guild_bank_tabAttribute>('guild_bank_tab', {
    guildid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TabId: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TabName: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    TabIcon: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    TabText: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'guild_bank_tab'
  });
};
