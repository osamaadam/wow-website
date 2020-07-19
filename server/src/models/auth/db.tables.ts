// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  account: def.accountModel;
  account_access: def.account_accessModel;
  account_banned: def.account_bannedModel;
  account_muted: def.account_mutedModel;
  autobroadcast: def.autobroadcastModel;
  ip2nation: def.ip2nationModel;
  ip2nationCountries: def.ip2nationCountriesModel;
  ip_banned: def.ip_bannedModel;
  logs: def.logsModel;
  logs_ip_actions: def.logs_ip_actionsModel;
  realmcharacters: def.realmcharactersModel;
  realmlist: def.realmlistModel;
  uptime: def.uptimeModel;
  version_db_auth: def.version_db_authModel;
}

export const getModels = function(seq: sequelize.Sequelize): ITables {

  function load(filePath: string) {
    return seq.import(path.join(__dirname, filePath));
  }

  return {
    account: load('account'),
    account_access: load('account_access'),
    account_banned: load('account_banned'),
    account_muted: load('account_muted'),
    autobroadcast: load('autobroadcast'),
    ip2nation: load('ip2nation'),
    ip2nationCountries: load('ip2nationCountries'),
    ip_banned: load('ip_banned'),
    logs: load('logs'),
    logs_ip_actions: load('logs_ip_actions'),
    realmcharacters: load('realmcharacters'),
    realmlist: load('realmlist'),
    uptime: load('uptime'),
    version_db_auth: load('version_db_auth'),
  } as ITables;
};