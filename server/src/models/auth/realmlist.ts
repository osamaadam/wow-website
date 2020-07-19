/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {realmlistInstance, realmlistAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<realmlistInstance, realmlistAttribute>('realmlist', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "127.0.0.1"
    },
    localAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "127.0.0.1"
    },
    localSubnetMask: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "255.255.255.0"
    },
    port: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: 8085
    },
    icon: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    flag: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 2
    },
    timezone: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    allowedSecurityLevel: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    population: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    gamebuild: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: 12340
    }
  }, {
    sequelize,
    tableName: 'realmlist'
  });
};
