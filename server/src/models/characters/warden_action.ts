/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {warden_actionInstance, warden_actionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<warden_actionInstance, warden_actionAttribute>('warden_action', {
    wardenId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'warden_action'
  });
};
