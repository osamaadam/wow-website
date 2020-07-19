/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {version_db_charactersInstance, version_db_charactersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<version_db_charactersInstance, version_db_charactersAttribute>('version_db_characters', {
    sql_rev: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    required_rev: {
      type: DataTypes.STRING(100),
      allowNull: true,
      references: {
        model: {
          tableName: 'version_db_characters',
        },
        key: 'sql_rev'
      }
    },
    '2020_01_04_00': {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'version_db_characters'
  });
};
