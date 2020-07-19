/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {groupsInstance, groupsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<groupsInstance, groupsAttribute>('groups', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    leaderGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lootMethod: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    looterGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    lootThreshold: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    icon1: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon4: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon5: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon6: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon7: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    icon8: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    groupType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    raidDifficulty: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    masterLooterGuid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'groups'
  });
};
