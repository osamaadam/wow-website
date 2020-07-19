/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {account_accessInstance, account_accessAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<account_accessInstance, account_accessAttribute>('account_access', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    gmlevel: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    RealmID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: -1,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'account_access'
  });
};
