/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_auraInstance, character_auraAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_auraInstance, character_auraAttribute>('character_aura', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Global Unique Identifier'
    },
    casterGuid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: 'Full Global Unique Identifier'
    },
    itemGuid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    spell: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    effectMask: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    recalculateMask: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    stackCount: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    amount0: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    amount1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    amount2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    base_amount0: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    base_amount1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    base_amount2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    maxDuration: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    remainTime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    remainCharges: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'character_aura'
  });
};
