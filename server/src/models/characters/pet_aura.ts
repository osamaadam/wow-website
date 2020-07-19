/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {pet_auraInstance, pet_auraAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<pet_auraInstance, pet_auraAttribute>('pet_aura', {
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
      comment: 'Full Global Unique Identifier'
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
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    amount1: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    amount2: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    base_amount0: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    base_amount1: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    base_amount2: {
      type: DataTypes.INTEGER(8),
      allowNull: false
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
    tableName: 'pet_aura'
  });
};
