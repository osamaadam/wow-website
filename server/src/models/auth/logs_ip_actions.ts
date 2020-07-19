/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {logs_ip_actionsInstance, logs_ip_actionsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<logs_ip_actionsInstance, logs_ip_actionsAttribute>('logs_ip_actions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'Unique Identifier'
    },
    account_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: 'Account ID'
    },
    character_guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: DataTypes.CHAR
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "127.0.0.1"
    },
    systemnote: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Notes inserted by system'
    },
    unixtime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: 'Unixtime'
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: DataTypes.DATE
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Allows users to add a comment'
    }
  }, {
    sequelize,
    tableName: 'logs_ip_actions'
  });
};
