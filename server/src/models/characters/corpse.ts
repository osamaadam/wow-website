/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {corpseInstance, corpseAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<corpseInstance, corpseAttribute>('corpse', {
    corpseGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: DataTypes.CHAR
    },
    posX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    posY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    posZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    orientation: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    mapId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'Map Identifier'
    },
    phaseMask: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    displayId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    itemCache: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bytes1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    bytes2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    guildId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    flags: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    dynFlags: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    corpseType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    instanceId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'Instance Identifier'
    }
  }, {
    sequelize,
    tableName: 'corpse'
  });
};
