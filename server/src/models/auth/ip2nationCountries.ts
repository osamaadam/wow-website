/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {ip2nationCountriesInstance, ip2nationCountriesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<ip2nationCountriesInstance, ip2nationCountriesAttribute>('ip2nationCountries', {
    code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    iso_code_2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    iso_code_3: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ""
    },
    iso_country: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ip2nationCountries'
  });
};
