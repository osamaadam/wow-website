/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {character_glyphsInstance, character_glyphsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<character_glyphsInstance, character_glyphsAttribute>('character_glyphs', {
    guid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    talentGroup: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    glyph1: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    glyph2: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    glyph3: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    glyph4: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    glyph5: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    glyph6: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'character_glyphs'
  });
};
