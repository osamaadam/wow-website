/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {account_dataInstance, account_dataAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<account_dataInstance, account_dataAttribute>('account_data', {
    accountId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Account Identifier'
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    data: {
      type: 'BLOB',
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'account_data'
  });
};
