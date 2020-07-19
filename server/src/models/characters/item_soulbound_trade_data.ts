/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {item_soulbound_trade_dataInstance, item_soulbound_trade_dataAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<item_soulbound_trade_dataInstance, item_soulbound_trade_dataAttribute>('item_soulbound_trade_data', {
    itemGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'Item GUID'
    },
    allowedPlayers: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'Space separated GUID list of players who can receive this item in trade'
    }
  }, {
    sequelize,
    tableName: 'item_soulbound_trade_data'
  });
};
