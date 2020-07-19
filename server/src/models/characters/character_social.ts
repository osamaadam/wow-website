/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_socialInstance, character_socialAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_socialInstance, character_socialAttribute>('character_social', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: DataTypes.CHAR
    },
    friend: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Friend Global Unique Identifier'
    },
    flags: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Friend Flags'
    },
    note: {
      type: DataTypes.STRING(48),
      allowNull: false,
      defaultValue: "",
      comment: 'Friend Note'
    }
  }, {
    sequelize,
    tableName: 'character_social'
  });
};
