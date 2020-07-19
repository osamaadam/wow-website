/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {lag_reportsInstance, lag_reportsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<lag_reportsInstance, lag_reportsAttribute>('lag_reports', {
    reportId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    lagType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
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
    latency: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    createTime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'lag_reports'
  });
};
