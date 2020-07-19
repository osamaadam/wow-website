// tslint:disable
import * as Sequelize from 'sequelize';


// table: account_access
export interface account_accessAttribute {
  id?:number;
  gmlevel?:number;
  RealmID?:number;
  comment?:string;
}
export interface account_accessInstance extends Sequelize.Instance<account_accessAttribute>, account_accessAttribute { }
export interface account_accessModel extends Sequelize.Model<account_accessInstance, account_accessAttribute> { }

// table: account
export interface accountAttribute {
  id?:any;
  username?:string;
  sha_pass_hash?:string;
  sessionkey?:string;
  v?:string;
  s?:string;
  token_key?:string;
  email?:string;
  reg_mail?:string;
  joindate?:Date;
  last_ip?:string;
  last_attempt_ip?:string;
  failed_logins?:number;
  locked?:number;
  lock_country?:string;
  last_login?:Date;
  online?:number;
  expansion?:number;
  mutetime?:number;
  mutereason?:string;
  muteby?:string;
  locale?:number;
  os?:string;
  recruiter?:number;
  totaltime?:number;
}
export interface accountInstance extends Sequelize.Instance<accountAttribute>, accountAttribute { }
export interface accountModel extends Sequelize.Model<accountInstance, accountAttribute> { }

// table: account_banned
export interface account_bannedAttribute {
  id?:any;
  bandate?:number;
  unbandate?:number;
  bannedby?:string;
  banreason?:string;
  active?:number;
}
export interface account_bannedInstance extends Sequelize.Instance<account_bannedAttribute>, account_bannedAttribute { }
export interface account_bannedModel extends Sequelize.Model<account_bannedInstance, account_bannedAttribute> { }

// table: account_muted
export interface account_mutedAttribute {
  guid?:any;
  mutedate?:number;
  mutetime?:number;
  mutedby?:string;
  mutereason?:string;
}
export interface account_mutedInstance extends Sequelize.Instance<account_mutedAttribute>, account_mutedAttribute { }
export interface account_mutedModel extends Sequelize.Model<account_mutedInstance, account_mutedAttribute> { }

// table: autobroadcast
export interface autobroadcastAttribute {
  realmid?:number;
  id?:number;
  weight?:number;
  text?:any;
}
export interface autobroadcastInstance extends Sequelize.Instance<autobroadcastAttribute>, autobroadcastAttribute { }
export interface autobroadcastModel extends Sequelize.Model<autobroadcastInstance, autobroadcastAttribute> { }

// table: ip2nation
export interface ip2nationAttribute {
  ip?:number;
  country?:string;
}
export interface ip2nationInstance extends Sequelize.Instance<ip2nationAttribute>, ip2nationAttribute { }
export interface ip2nationModel extends Sequelize.Model<ip2nationInstance, ip2nationAttribute> { }

// table: ip2nationCountries
export interface ip2nationCountriesAttribute {
  code?:string;
  iso_code_2?:string;
  iso_code_3?:string;
  iso_country?:string;
  country?:string;
  lat?:number;
  lon?:number;
}
export interface ip2nationCountriesInstance extends Sequelize.Instance<ip2nationCountriesAttribute>, ip2nationCountriesAttribute { }
export interface ip2nationCountriesModel extends Sequelize.Model<ip2nationCountriesInstance, ip2nationCountriesAttribute> { }

// table: ip_banned
export interface ip_bannedAttribute {
  ip?:string;
  bandate?:number;
  unbandate?:number;
  bannedby?:string;
  banreason?:string;
}
export interface ip_bannedInstance extends Sequelize.Instance<ip_bannedAttribute>, ip_bannedAttribute { }
export interface ip_bannedModel extends Sequelize.Model<ip_bannedInstance, ip_bannedAttribute> { }

// table: logs
export interface logsAttribute {
  time?:number;
  realm?:number;
  type?:string;
  level?:number;
  string?:string;
}
export interface logsInstance extends Sequelize.Instance<logsAttribute>, logsAttribute { }
export interface logsModel extends Sequelize.Model<logsInstance, logsAttribute> { }

// table: logs_ip_actions
export interface logs_ip_actionsAttribute {
  id?:any;
  account_id?:any;
  character_guid?:string;
  type?:number;
  ip?:string;
  systemnote?:any;
  unixtime?:any;
  time?:Date;
  comment?:any;
}
export interface logs_ip_actionsInstance extends Sequelize.Instance<logs_ip_actionsAttribute>, logs_ip_actionsAttribute { }
export interface logs_ip_actionsModel extends Sequelize.Model<logs_ip_actionsInstance, logs_ip_actionsAttribute> { }

// table: realmcharacters
export interface realmcharactersAttribute {
  realmid?:number;
  acctid?:number;
  numchars?:number;
}
export interface realmcharactersInstance extends Sequelize.Instance<realmcharactersAttribute>, realmcharactersAttribute { }
export interface realmcharactersModel extends Sequelize.Model<realmcharactersInstance, realmcharactersAttribute> { }

// table: realmlist
export interface realmlistAttribute {
  id?:number;
  name?:string;
  address?:string;
  localAddress?:string;
  localSubnetMask?:string;
  port?:number;
  icon?:number;
  flag?:number;
  timezone?:number;
  allowedSecurityLevel?:number;
  population?:number;
  gamebuild?:number;
}
export interface realmlistInstance extends Sequelize.Instance<realmlistAttribute>, realmlistAttribute { }
export interface realmlistModel extends Sequelize.Model<realmlistInstance, realmlistAttribute> { }

// table: uptime
export interface uptimeAttribute {
  realmid?:number;
  starttime?:number;
  uptime?:number;
  maxplayers?:number;
  revision?:string;
}
export interface uptimeInstance extends Sequelize.Instance<uptimeAttribute>, uptimeAttribute { }
export interface uptimeModel extends Sequelize.Model<uptimeInstance, uptimeAttribute> { }

// table: version_db_auth
export interface version_db_authAttribute {
  sql_rev?:string;
  required_rev?:string;
  2020_02_07_00?:boolean;
}
export interface version_db_authInstance extends Sequelize.Instance<version_db_authAttribute>, version_db_authAttribute { }
export interface version_db_authModel extends Sequelize.Model<version_db_authInstance, version_db_authAttribute> { }
