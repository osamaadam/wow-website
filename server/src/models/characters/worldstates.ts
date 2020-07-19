/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {worldstatesInstance, worldstatesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<worldstatesInstance, worldstatesAttribute>('worldstates', {
    entry: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    comment: {
      type: 'TINYTEXT',
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'worldstates'
  });
};
