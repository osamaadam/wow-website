/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {bugreportInstance, bugreportAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<bugreportInstance, bugreportAttribute>('bugreport', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'Identifier'
    },
    type: {
      type: 'LONGTEXT',
      allowNull: false
    },
    content: {
      type: 'LONGTEXT',
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bugreport'
  });
};
