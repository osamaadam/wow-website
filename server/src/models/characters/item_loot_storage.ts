/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {item_loot_storageInstance, item_loot_storageAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<item_loot_storageInstance, item_loot_storageAttribute>('item_loot_storage', {
    containerGUID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    itemid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    randomPropertyId: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    randomSuffix: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'item_loot_storage'
  });
};
