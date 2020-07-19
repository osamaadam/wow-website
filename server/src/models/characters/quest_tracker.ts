/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {quest_trackerInstance, quest_trackerAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<quest_trackerInstance, quest_trackerAttribute>('quest_tracker', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    character_guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    quest_accept_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    quest_complete_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quest_abandon_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    completed_by_gm: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    core_hash: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: "0"
    },
    core_revision: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'quest_tracker'
  });
};
