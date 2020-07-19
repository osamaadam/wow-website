/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_homebindInstance, character_homebindAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_homebindInstance, character_homebindAttribute>('character_homebind', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    mapId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'Map Identifier'
    },
    zoneId: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: 'Zone Identifier'
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
    }
  }, {
    sequelize,
    tableName: 'character_homebind'
  });
};
