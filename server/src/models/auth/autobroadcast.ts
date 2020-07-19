/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {autobroadcastInstance, autobroadcastAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<autobroadcastInstance, autobroadcastAttribute>('autobroadcast', {
    realmid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: -1,
      primaryKey: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    weight: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: 1
    },
    text: {
      type: 'LONGTEXT',
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'autobroadcast'
  });
};
