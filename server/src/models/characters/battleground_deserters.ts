/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {battleground_desertersInstance, battleground_desertersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<battleground_desertersInstance, battleground_desertersAttribute>('battleground_deserters', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: DataTypes.CHAR
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      comment: 'type of the desertion'
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'battleground_deserters'
  });
};
