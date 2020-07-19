/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {game_event_condition_saveInstance, game_event_condition_saveAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<game_event_condition_saveInstance, game_event_condition_saveAttribute>('game_event_condition_save', {
    eventEntry: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    condition_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    done: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'game_event_condition_save'
  });
};
