/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {reserved_nameInstance, reserved_nameAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<reserved_nameInstance, reserved_nameAttribute>('reserved_name', {
    name: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'reserved_name'
  });
};
