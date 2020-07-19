/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {gm_surveyInstance, gm_surveyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<gm_surveyInstance, gm_surveyAttribute>('gm_survey', {
    surveyId: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    mainSurvey: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    comment: {
      type: 'LONGTEXT',
      allowNull: false
    },
    createTime: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    maxMMR: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'gm_survey'
  });
};
