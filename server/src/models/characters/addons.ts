/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {addonsInstance, addonsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<addonsInstance, addonsAttribute>('addons', {
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    crc: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'addons'
  });
};
