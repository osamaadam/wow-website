/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {account_mutedInstance, account_mutedAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<account_mutedInstance, account_mutedAttribute>('account_muted', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    mutedate: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    mutetime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mutedby: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mutereason: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'account_muted'
  });
};
