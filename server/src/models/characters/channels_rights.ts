/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {channels_rightsInstance, channels_rightsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<channels_rightsInstance, channels_rightsAttribute>('channels_rights', {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    flags: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    speakdelay: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    joinmessage: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    delaymessage: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    moderators: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'channels_rights'
  });
};
