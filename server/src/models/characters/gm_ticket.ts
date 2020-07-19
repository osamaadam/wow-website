/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {gm_ticketInstance, gm_ticketAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<gm_ticketInstance, gm_ticketAttribute>('gm_ticket', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '0 open, 1 closed, 2 character deleted'
    },
    playerGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'Global Unique Identifier of ticket creator'
    },
    name: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: 'Name of ticket creator'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createTime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mapId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: 0
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
    lastModifiedTime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    closedBy: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    assignedTo: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'GUID of admin to whom ticket is assigned'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    completed: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    escalated: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    viewed: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    needMoreHelp: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    resolvedBy: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'GUID of GM who resolved the ticket'
    }
  }, {
    sequelize,
    tableName: 'gm_ticket'
  });
};
