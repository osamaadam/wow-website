/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_declinednameInstance, character_declinednameAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_declinednameInstance, character_declinednameAttribute>('character_declinedname', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    genitive: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    dative: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    accusative: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    instrumental: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    prepositional: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'character_declinedname'
  });
};
