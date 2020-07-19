/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {log_moneyInstance, log_moneyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<log_moneyInstance, log_moneyAttribute>('log_money', {
    sender_acc: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    sender_guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    sender_name: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    sender_ip: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    receiver_acc: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    receiver_name: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    money: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    topic: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'log_money'
  });
};
