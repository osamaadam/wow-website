/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {log_encounterInstance, log_encounterAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<log_encounterInstance, log_encounterAttribute>('log_encounter', {
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    map: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    creditType: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    creditEntry: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    playersInfo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'log_encounter'
  });
};
