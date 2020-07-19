/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_pet_declinednameInstance, character_pet_declinednameAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_pet_declinednameInstance, character_pet_declinednameAttribute>('character_pet_declinedname', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    owner: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    genitive: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    dative: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    accusative: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    instrumental: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    prepositional: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'character_pet_declinedname'
  });
};
