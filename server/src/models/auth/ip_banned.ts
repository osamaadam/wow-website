/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {ip_bannedInstance, ip_bannedAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<ip_bannedInstance, ip_bannedAttribute>('ip_banned', {
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "127.0.0.1",
      primaryKey: true
    },
    bandate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    unbandate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    bannedby: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "[Console]"
    },
    banreason: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "no reason"
    }
  }, {
    sequelize,
    tableName: 'ip_banned'
  });
};
