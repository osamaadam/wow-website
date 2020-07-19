/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {ip2nationInstance, ip2nationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<ip2nationInstance, ip2nationAttribute>('ip2nation', {
    ip: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ip2nation'
  });
};
