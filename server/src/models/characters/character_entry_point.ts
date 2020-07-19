/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_entry_pointInstance, character_entry_pointAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_entry_pointInstance, character_entry_pointAttribute>('character_entry_point', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    joinX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    joinY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    joinZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    joinO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    joinMapId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'Map Identifier'
    },
    taxiPath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mountSpell: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'character_entry_point'
  });
};
