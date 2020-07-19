/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {logsInstance, logsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<logsInstance, logsAttribute>('logs', {
    time: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    realm: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    string: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logs'
  });
};
