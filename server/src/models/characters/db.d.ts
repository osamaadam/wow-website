// tslint:disable
import * as Sequelize from 'sequelize';


// table: account_data
export interface account_dataAttribute {
  accountId?:any;
  type?:number;
  time?:number;
  data?:any;
}
export interface account_dataInstance extends Sequelize.Instance<account_dataAttribute>, account_dataAttribute { }
export interface account_dataModel extends Sequelize.Model<account_dataInstance, account_dataAttribute> { }

// table: account_tutorial
export interface account_tutorialAttribute {
  accountId?:any;
  tut0?:number;
  tut1?:number;
  tut2?:number;
  tut3?:number;
  tut4?:number;
  tut5?:number;
  tut6?:number;
  tut7?:number;
}
export interface account_tutorialInstance extends Sequelize.Instance<account_tutorialAttribute>, account_tutorialAttribute { }
export interface account_tutorialModel extends Sequelize.Model<account_tutorialInstance, account_tutorialAttribute> { }

// table: account_instance_times
export interface account_instance_timesAttribute {
  accountId?:number;
  instanceId?:number;
  releaseTime?:number;
}
export interface account_instance_timesInstance extends Sequelize.Instance<account_instance_timesAttribute>, account_instance_timesAttribute { }
export interface account_instance_timesModel extends Sequelize.Model<account_instance_timesInstance, account_instance_timesAttribute> { }

// table: addons
export interface addonsAttribute {
  name?:string;
  crc?:number;
}
export interface addonsInstance extends Sequelize.Instance<addonsAttribute>, addonsAttribute { }
export interface addonsModel extends Sequelize.Model<addonsInstance, addonsAttribute> { }

// table: arena_team
export interface arena_teamAttribute {
  arenaTeamId?:number;
  name?:string;
  captainGuid?:number;
  type?:number;
  rating?:number;
  seasonGames?:number;
  seasonWins?:number;
  weekGames?:number;
  weekWins?:number;
  rank?:number;
  backgroundColor?:number;
  emblemStyle?:number;
  emblemColor?:number;
  borderStyle?:number;
  borderColor?:number;
}
export interface arena_teamInstance extends Sequelize.Instance<arena_teamAttribute>, arena_teamAttribute { }
export interface arena_teamModel extends Sequelize.Model<arena_teamInstance, arena_teamAttribute> { }

// table: arena_team_member
export interface arena_team_memberAttribute {
  arenaTeamId?:number;
  guid?:number;
  weekGames?:number;
  weekWins?:number;
  seasonGames?:number;
  seasonWins?:number;
  personalRating?:number;
}
export interface arena_team_memberInstance extends Sequelize.Instance<arena_team_memberAttribute>, arena_team_memberAttribute { }
export interface arena_team_memberModel extends Sequelize.Model<arena_team_memberInstance, arena_team_memberAttribute> { }

// table: auctionhouse
export interface auctionhouseAttribute {
  id?:number;
  auctioneerguid?:number;
  itemguid?:number;
  itemowner?:number;
  buyoutprice?:number;
  time?:number;
  buyguid?:number;
  lastbid?:number;
  startbid?:number;
  deposit?:number;
}
export interface auctionhouseInstance extends Sequelize.Instance<auctionhouseAttribute>, auctionhouseAttribute { }
export interface auctionhouseModel extends Sequelize.Model<auctionhouseInstance, auctionhouseAttribute> { }

// table: banned_addons
export interface banned_addonsAttribute {
  Id?:number;
  Name?:string;
  Version?:string;
  Timestamp?:Date;
}
export interface banned_addonsInstance extends Sequelize.Instance<banned_addonsAttribute>, banned_addonsAttribute { }
export interface banned_addonsModel extends Sequelize.Model<banned_addonsInstance, banned_addonsAttribute> { }

// table: battleground_deserters
export interface battleground_desertersAttribute {
  guid?:string;
  type?:any;
  datetime?:Date;
}
export interface battleground_desertersInstance extends Sequelize.Instance<battleground_desertersAttribute>, battleground_desertersAttribute { }
export interface battleground_desertersModel extends Sequelize.Model<battleground_desertersInstance, battleground_desertersAttribute> { }

// table: bugreport
export interface bugreportAttribute {
  id?:any;
  type?:any;
  content?:any;
}
export interface bugreportInstance extends Sequelize.Instance<bugreportAttribute>, bugreportAttribute { }
export interface bugreportModel extends Sequelize.Model<bugreportInstance, bugreportAttribute> { }

// table: calendar_events
export interface calendar_eventsAttribute {
  id?:number;
  creator?:number;
  title?:string;
  description?:string;
  type?:number;
  dungeon?:number;
  eventtime?:number;
  flags?:number;
  time2?:number;
}
export interface calendar_eventsInstance extends Sequelize.Instance<calendar_eventsAttribute>, calendar_eventsAttribute { }
export interface calendar_eventsModel extends Sequelize.Model<calendar_eventsInstance, calendar_eventsAttribute> { }

// table: calendar_invites
export interface calendar_invitesAttribute {
  id?:number;
  event?:number;
  invitee?:number;
  sender?:number;
  status?:number;
  statustime?:number;
  rank?:number;
  text?:string;
}
export interface calendar_invitesInstance extends Sequelize.Instance<calendar_invitesAttribute>, calendar_invitesAttribute { }
export interface calendar_invitesModel extends Sequelize.Model<calendar_invitesInstance, calendar_invitesAttribute> { }

// table: channels
export interface channelsAttribute {
  channelId?:number;
  name?:string;
  team?:number;
  announce?:number;
  ownership?:number;
  password?:string;
  lastUsed?:number;
}
export interface channelsInstance extends Sequelize.Instance<channelsAttribute>, channelsAttribute { }
export interface channelsModel extends Sequelize.Model<channelsInstance, channelsAttribute> { }

// table: channels_bans
export interface channels_bansAttribute {
  channelId?:number;
  playerGUID?:number;
  banTime?:number;
}
export interface channels_bansInstance extends Sequelize.Instance<channels_bansAttribute>, channels_bansAttribute { }
export interface channels_bansModel extends Sequelize.Model<channels_bansInstance, channels_bansAttribute> { }

// table: channels_rights
export interface channels_rightsAttribute {
  name?:string;
  flags?:number;
  speakdelay?:number;
  joinmessage?:string;
  delaymessage?:string;
  moderators?:string;
}
export interface channels_rightsInstance extends Sequelize.Instance<channels_rightsAttribute>, channels_rightsAttribute { }
export interface channels_rightsModel extends Sequelize.Model<channels_rightsInstance, channels_rightsAttribute> { }

// table: character_account_data
export interface character_account_dataAttribute {
  guid?:number;
  type?:number;
  time?:number;
  data?:any;
}
export interface character_account_dataInstance extends Sequelize.Instance<character_account_dataAttribute>, character_account_dataAttribute { }
export interface character_account_dataModel extends Sequelize.Model<character_account_dataInstance, character_account_dataAttribute> { }

// table: character_achievement
export interface character_achievementAttribute {
  guid?:number;
  achievement?:number;
  date?:number;
}
export interface character_achievementInstance extends Sequelize.Instance<character_achievementAttribute>, character_achievementAttribute { }
export interface character_achievementModel extends Sequelize.Model<character_achievementInstance, character_achievementAttribute> { }

// table: character_achievement_progress
export interface character_achievement_progressAttribute {
  guid?:number;
  criteria?:number;
  counter?:number;
  date?:number;
}
export interface character_achievement_progressInstance extends Sequelize.Instance<character_achievement_progressAttribute>, character_achievement_progressAttribute { }
export interface character_achievement_progressModel extends Sequelize.Model<character_achievement_progressInstance, character_achievement_progressAttribute> { }

// table: character_action
export interface character_actionAttribute {
  guid?:number;
  spec?:number;
  button?:number;
  action?:number;
  type?:number;
}
export interface character_actionInstance extends Sequelize.Instance<character_actionAttribute>, character_actionAttribute { }
export interface character_actionModel extends Sequelize.Model<character_actionInstance, character_actionAttribute> { }

// table: character_arena_stats
export interface character_arena_statsAttribute {
  guid?:number;
  slot?:number;
  matchMakerRating?:number;
  maxMMR?:number;
}
export interface character_arena_statsInstance extends Sequelize.Instance<character_arena_statsAttribute>, character_arena_statsAttribute { }
export interface character_arena_statsModel extends Sequelize.Model<character_arena_statsInstance, character_arena_statsAttribute> { }

// table: character_aura
export interface character_auraAttribute {
  guid?:any;
  casterGuid?:any;
  itemGuid?:number;
  spell?:number;
  effectMask?:number;
  recalculateMask?:number;
  stackCount?:number;
  amount0?:number;
  amount1?:number;
  amount2?:number;
  base_amount0?:number;
  base_amount1?:number;
  base_amount2?:number;
  maxDuration?:number;
  remainTime?:number;
  remainCharges?:number;
}
export interface character_auraInstance extends Sequelize.Instance<character_auraAttribute>, character_auraAttribute { }
export interface character_auraModel extends Sequelize.Model<character_auraInstance, character_auraAttribute> { }

// table: character_banned
export interface character_bannedAttribute {
  guid?:any;
  bandate?:number;
  unbandate?:number;
  bannedby?:string;
  banreason?:string;
  active?:number;
}
export interface character_bannedInstance extends Sequelize.Instance<character_bannedAttribute>, character_bannedAttribute { }
export interface character_bannedModel extends Sequelize.Model<character_bannedInstance, character_bannedAttribute> { }

// table: character_battleground_random
export interface character_battleground_randomAttribute {
  guid?:number;
}
export interface character_battleground_randomInstance extends Sequelize.Instance<character_battleground_randomAttribute>, character_battleground_randomAttribute { }
export interface character_battleground_randomModel extends Sequelize.Model<character_battleground_randomInstance, character_battleground_randomAttribute> { }

// table: character_brew_of_the_month
export interface character_brew_of_the_monthAttribute {
  guid?:number;
  lastEventId?:number;
}
export interface character_brew_of_the_monthInstance extends Sequelize.Instance<character_brew_of_the_monthAttribute>, character_brew_of_the_monthAttribute { }
export interface character_brew_of_the_monthModel extends Sequelize.Model<character_brew_of_the_monthInstance, character_brew_of_the_monthAttribute> { }

// table: character_declinedname
export interface character_declinednameAttribute {
  guid?:any;
  genitive?:string;
  dative?:string;
  accusative?:string;
  instrumental?:string;
  prepositional?:string;
}
export interface character_declinednameInstance extends Sequelize.Instance<character_declinednameAttribute>, character_declinednameAttribute { }
export interface character_declinednameModel extends Sequelize.Model<character_declinednameInstance, character_declinednameAttribute> { }

// table: character_entry_point
export interface character_entry_pointAttribute {
  guid?:any;
  joinX?:number;
  joinY?:number;
  joinZ?:number;
  joinO?:number;
  joinMapId?:any;
  taxiPath?:string;
  mountSpell?:number;
}
export interface character_entry_pointInstance extends Sequelize.Instance<character_entry_pointAttribute>, character_entry_pointAttribute { }
export interface character_entry_pointModel extends Sequelize.Model<character_entry_pointInstance, character_entry_pointAttribute> { }

// table: character_equipmentsets
export interface character_equipmentsetsAttribute {
  guid?:number;
  setguid?:number;
  setindex?:number;
  name?:string;
  iconname?:string;
  ignore_mask?:number;
  item0?:number;
  item1?:number;
  item2?:number;
  item3?:number;
  item4?:number;
  item5?:number;
  item6?:number;
  item7?:number;
  item8?:number;
  item9?:number;
  item10?:number;
  item11?:number;
  item12?:number;
  item13?:number;
  item14?:number;
  item15?:number;
  item16?:number;
  item17?:number;
  item18?:number;
}
export interface character_equipmentsetsInstance extends Sequelize.Instance<character_equipmentsetsAttribute>, character_equipmentsetsAttribute { }
export interface character_equipmentsetsModel extends Sequelize.Model<character_equipmentsetsInstance, character_equipmentsetsAttribute> { }

// table: character_gifts
export interface character_giftsAttribute {
  guid?:number;
  item_guid?:number;
  entry?:number;
  flags?:number;
}
export interface character_giftsInstance extends Sequelize.Instance<character_giftsAttribute>, character_giftsAttribute { }
export interface character_giftsModel extends Sequelize.Model<character_giftsInstance, character_giftsAttribute> { }

// table: character_glyphs
export interface character_glyphsAttribute {
  guid?:number;
  talentGroup?:number;
  glyph1?:number;
  glyph2?:number;
  glyph3?:number;
  glyph4?:number;
  glyph5?:number;
  glyph6?:number;
}
export interface character_glyphsInstance extends Sequelize.Instance<character_glyphsAttribute>, character_glyphsAttribute { }
export interface character_glyphsModel extends Sequelize.Model<character_glyphsInstance, character_glyphsAttribute> { }

// table: character_homebind
export interface character_homebindAttribute {
  guid?:any;
  mapId?:any;
  zoneId?:any;
  posX?:number;
  posY?:number;
  posZ?:number;
}
export interface character_homebindInstance extends Sequelize.Instance<character_homebindAttribute>, character_homebindAttribute { }
export interface character_homebindModel extends Sequelize.Model<character_homebindInstance, character_homebindAttribute> { }

// table: character_instance
export interface character_instanceAttribute {
  guid?:number;
  instance?:number;
  permanent?:number;
  extended?:number;
}
export interface character_instanceInstance extends Sequelize.Instance<character_instanceAttribute>, character_instanceAttribute { }
export interface character_instanceModel extends Sequelize.Model<character_instanceInstance, character_instanceAttribute> { }

// table: character_inventory
export interface character_inventoryAttribute {
  guid?:any;
  bag?:number;
  slot?:number;
  item?:any;
}
export interface character_inventoryInstance extends Sequelize.Instance<character_inventoryAttribute>, character_inventoryAttribute { }
export interface character_inventoryModel extends Sequelize.Model<character_inventoryInstance, character_inventoryAttribute> { }

// table: character_pet
export interface character_petAttribute {
  id?:number;
  entry?:number;
  owner?:number;
  modelid?:number;
  CreatedBySpell?:number;
  PetType?:number;
  level?:number;
  exp?:number;
  Reactstate?:number;
  name?:string;
  renamed?:number;
  slot?:number;
  curhealth?:number;
  curmana?:number;
  curhappiness?:number;
  savetime?:number;
  abdata?:string;
}
export interface character_petInstance extends Sequelize.Instance<character_petAttribute>, character_petAttribute { }
export interface character_petModel extends Sequelize.Model<character_petInstance, character_petAttribute> { }

// table: character_pet_declinedname
export interface character_pet_declinednameAttribute {
  id?:number;
  owner?:number;
  genitive?:string;
  dative?:string;
  accusative?:string;
  instrumental?:string;
  prepositional?:string;
}
export interface character_pet_declinednameInstance extends Sequelize.Instance<character_pet_declinednameAttribute>, character_pet_declinednameAttribute { }
export interface character_pet_declinednameModel extends Sequelize.Model<character_pet_declinednameInstance, character_pet_declinednameAttribute> { }

// table: character_queststatus
export interface character_queststatusAttribute {
  guid?:any;
  quest?:any;
  status?:number;
  explored?:number;
  timer?:number;
  mobcount1?:number;
  mobcount2?:number;
  mobcount3?:number;
  mobcount4?:number;
  itemcount1?:number;
  itemcount2?:number;
  itemcount3?:number;
  itemcount4?:number;
  itemcount5?:number;
  itemcount6?:number;
  playercount?:number;
}
export interface character_queststatusInstance extends Sequelize.Instance<character_queststatusAttribute>, character_queststatusAttribute { }
export interface character_queststatusModel extends Sequelize.Model<character_queststatusInstance, character_queststatusAttribute> { }

// table: character_queststatus_daily
export interface character_queststatus_dailyAttribute {
  guid?:any;
  quest?:any;
  time?:number;
}
export interface character_queststatus_dailyInstance extends Sequelize.Instance<character_queststatus_dailyAttribute>, character_queststatus_dailyAttribute { }
export interface character_queststatus_dailyModel extends Sequelize.Model<character_queststatus_dailyInstance, character_queststatus_dailyAttribute> { }

// table: character_queststatus_monthly
export interface character_queststatus_monthlyAttribute {
  guid?:any;
  quest?:any;
}
export interface character_queststatus_monthlyInstance extends Sequelize.Instance<character_queststatus_monthlyAttribute>, character_queststatus_monthlyAttribute { }
export interface character_queststatus_monthlyModel extends Sequelize.Model<character_queststatus_monthlyInstance, character_queststatus_monthlyAttribute> { }

// table: character_queststatus_rewarded
export interface character_queststatus_rewardedAttribute {
  guid?:any;
  quest?:any;
  active?:number;
}
export interface character_queststatus_rewardedInstance extends Sequelize.Instance<character_queststatus_rewardedAttribute>, character_queststatus_rewardedAttribute { }
export interface character_queststatus_rewardedModel extends Sequelize.Model<character_queststatus_rewardedInstance, character_queststatus_rewardedAttribute> { }

// table: character_queststatus_seasonal
export interface character_queststatus_seasonalAttribute {
  guid?:any;
  quest?:any;
  event?:any;
}
export interface character_queststatus_seasonalInstance extends Sequelize.Instance<character_queststatus_seasonalAttribute>, character_queststatus_seasonalAttribute { }
export interface character_queststatus_seasonalModel extends Sequelize.Model<character_queststatus_seasonalInstance, character_queststatus_seasonalAttribute> { }

// table: character_queststatus_weekly
export interface character_queststatus_weeklyAttribute {
  guid?:any;
  quest?:any;
}
export interface character_queststatus_weeklyInstance extends Sequelize.Instance<character_queststatus_weeklyAttribute>, character_queststatus_weeklyAttribute { }
export interface character_queststatus_weeklyModel extends Sequelize.Model<character_queststatus_weeklyInstance, character_queststatus_weeklyAttribute> { }

// table: character_reputation
export interface character_reputationAttribute {
  guid?:any;
  faction?:number;
  standing?:number;
  flags?:number;
}
export interface character_reputationInstance extends Sequelize.Instance<character_reputationAttribute>, character_reputationAttribute { }
export interface character_reputationModel extends Sequelize.Model<character_reputationInstance, character_reputationAttribute> { }

// table: character_skills
export interface character_skillsAttribute {
  guid?:any;
  skill?:number;
  value?:number;
  max?:number;
}
export interface character_skillsInstance extends Sequelize.Instance<character_skillsAttribute>, character_skillsAttribute { }
export interface character_skillsModel extends Sequelize.Model<character_skillsInstance, character_skillsAttribute> { }

// table: character_social
export interface character_socialAttribute {
  guid?:string;
  friend?:any;
  flags?:any;
  note?:any;
}
export interface character_socialInstance extends Sequelize.Instance<character_socialAttribute>, character_socialAttribute { }
export interface character_socialModel extends Sequelize.Model<character_socialInstance, character_socialAttribute> { }

// table: character_spell
export interface character_spellAttribute {
  guid?:any;
  spell?:any;
  specMask?:number;
}
export interface character_spellInstance extends Sequelize.Instance<character_spellAttribute>, character_spellAttribute { }
export interface character_spellModel extends Sequelize.Model<character_spellInstance, character_spellAttribute> { }

// table: character_spell_cooldown
export interface character_spell_cooldownAttribute {
  guid?:any;
  spell?:any;
  item?:any;
  time?:number;
  needSend?:number;
}
export interface character_spell_cooldownInstance extends Sequelize.Instance<character_spell_cooldownAttribute>, character_spell_cooldownAttribute { }
export interface character_spell_cooldownModel extends Sequelize.Model<character_spell_cooldownInstance, character_spell_cooldownAttribute> { }

// table: character_stats
export interface character_statsAttribute {
  guid?:any;
  maxhealth?:number;
  maxpower1?:number;
  maxpower2?:number;
  maxpower3?:number;
  maxpower4?:number;
  maxpower5?:number;
  maxpower6?:number;
  maxpower7?:number;
  strength?:number;
  agility?:number;
  stamina?:number;
  intellect?:number;
  spirit?:number;
  armor?:number;
  resHoly?:number;
  resFire?:number;
  resNature?:number;
  resFrost?:number;
  resShadow?:number;
  resArcane?:number;
  blockPct?:number;
  dodgePct?:number;
  parryPct?:number;
  critPct?:number;
  rangedCritPct?:number;
  spellCritPct?:number;
  attackPower?:number;
  rangedAttackPower?:number;
  spellPower?:number;
  resilience?:number;
}
export interface character_statsInstance extends Sequelize.Instance<character_statsAttribute>, character_statsAttribute { }
export interface character_statsModel extends Sequelize.Model<character_statsInstance, character_statsAttribute> { }

// table: character_talent
export interface character_talentAttribute {
  guid?:number;
  spell?:number;
  specMask?:number;
}
export interface character_talentInstance extends Sequelize.Instance<character_talentAttribute>, character_talentAttribute { }
export interface character_talentModel extends Sequelize.Model<character_talentInstance, character_talentAttribute> { }

// table: corpse
export interface corpseAttribute {
  corpseGuid?:any;
  guid?:string;
  posX?:number;
  posY?:number;
  posZ?:number;
  orientation?:number;
  mapId?:any;
  phaseMask?:number;
  displayId?:number;
  itemCache?:string;
  bytes1?:number;
  bytes2?:number;
  guildId?:number;
  flags?:number;
  dynFlags?:number;
  time?:number;
  corpseType?:number;
  instanceId?:any;
}
export interface corpseInstance extends Sequelize.Instance<corpseAttribute>, corpseAttribute { }
export interface corpseModel extends Sequelize.Model<corpseInstance, corpseAttribute> { }

// table: characters
export interface charactersAttribute {
  guid?:any;
  account?:any;
  name?:string;
  race?:number;
  class?:number;
  gender?:number;
  level?:number;
  xp?:number;
  money?:number;
  skin?:number;
  face?:number;
  hairStyle?:number;
  hairColor?:number;
  facialStyle?:number;
  bankSlots?:number;
  restState?:number;
  playerFlags?:number;
  position_x?:number;
  position_y?:number;
  position_z?:number;
  map?:any;
  instance_id?:number;
  instance_mode_mask?:number;
  orientation?:number;
  taximask?:string;
  online?:number;
  cinematic?:number;
  totaltime?:number;
  leveltime?:number;
  logout_time?:number;
  is_logout_resting?:number;
  rest_bonus?:number;
  resettalents_cost?:number;
  resettalents_time?:number;
  trans_x?:number;
  trans_y?:number;
  trans_z?:number;
  trans_o?:number;
  transguid?:number;
  extra_flags?:number;
  stable_slots?:number;
  at_login?:number;
  zone?:number;
  death_expire_time?:number;
  taxi_path?:string;
  arenaPoints?:number;
  totalHonorPoints?:number;
  todayHonorPoints?:number;
  yesterdayHonorPoints?:number;
  totalKills?:number;
  todayKills?:number;
  yesterdayKills?:number;
  chosenTitle?:number;
  knownCurrencies?:number;
  watchedFaction?:number;
  drunk?:number;
  health?:number;
  power1?:number;
  power2?:number;
  power3?:number;
  power4?:number;
  power5?:number;
  power6?:number;
  power7?:number;
  latency?:number;
  talentGroupsCount?:number;
  activeTalentGroup?:number;
  exploredZones?:any;
  equipmentCache?:any;
  ammoId?:number;
  knownTitles?:any;
  actionBars?:number;
  grantableLevels?:number;
  creation_date?:Date;
  deleteInfos_Account?:number;
  deleteInfos_Name?:string;
  deleteDate?:number;
}
export interface charactersInstance extends Sequelize.Instance<charactersAttribute>, charactersAttribute { }
export interface charactersModel extends Sequelize.Model<charactersInstance, charactersAttribute> { }

// table: creature_respawn
export interface creature_respawnAttribute {
  guid?:any;
  respawnTime?:number;
  mapId?:number;
  instanceId?:any;
}
export interface creature_respawnInstance extends Sequelize.Instance<creature_respawnAttribute>, creature_respawnAttribute { }
export interface creature_respawnModel extends Sequelize.Model<creature_respawnInstance, creature_respawnAttribute> { }

// table: game_event_condition_save
export interface game_event_condition_saveAttribute {
  eventEntry?:number;
  condition_id?:number;
  done?:number;
}
export interface game_event_condition_saveInstance extends Sequelize.Instance<game_event_condition_saveAttribute>, game_event_condition_saveAttribute { }
export interface game_event_condition_saveModel extends Sequelize.Model<game_event_condition_saveInstance, game_event_condition_saveAttribute> { }

// table: game_event_save
export interface game_event_saveAttribute {
  eventEntry?:number;
  state?:number;
  next_start?:number;
}
export interface game_event_saveInstance extends Sequelize.Instance<game_event_saveAttribute>, game_event_saveAttribute { }
export interface game_event_saveModel extends Sequelize.Model<game_event_saveInstance, game_event_saveAttribute> { }

// table: gameobject_respawn
export interface gameobject_respawnAttribute {
  guid?:any;
  respawnTime?:number;
  mapId?:number;
  instanceId?:any;
}
export interface gameobject_respawnInstance extends Sequelize.Instance<gameobject_respawnAttribute>, gameobject_respawnAttribute { }
export interface gameobject_respawnModel extends Sequelize.Model<gameobject_respawnInstance, gameobject_respawnAttribute> { }

// table: gm_subsurvey
export interface gm_subsurveyAttribute {
  surveyId?:number;
  questionId?:number;
  answer?:number;
  answerComment?:string;
}
export interface gm_subsurveyInstance extends Sequelize.Instance<gm_subsurveyAttribute>, gm_subsurveyAttribute { }
export interface gm_subsurveyModel extends Sequelize.Model<gm_subsurveyInstance, gm_subsurveyAttribute> { }

// table: gm_survey
export interface gm_surveyAttribute {
  surveyId?:number;
  guid?:number;
  mainSurvey?:number;
  comment?:any;
  createTime?:number;
  maxMMR?:number;
}
export interface gm_surveyInstance extends Sequelize.Instance<gm_surveyAttribute>, gm_surveyAttribute { }
export interface gm_surveyModel extends Sequelize.Model<gm_surveyInstance, gm_surveyAttribute> { }

// table: gm_ticket
export interface gm_ticketAttribute {
  id?:number;
  type?:any;
  playerGuid?:any;
  name?:any;
  description?:string;
  createTime?:number;
  mapId?:number;
  posX?:number;
  posY?:number;
  posZ?:number;
  lastModifiedTime?:number;
  closedBy?:number;
  assignedTo?:any;
  comment?:string;
  response?:string;
  completed?:number;
  escalated?:number;
  viewed?:number;
  needMoreHelp?:number;
  resolvedBy?:any;
}
export interface gm_ticketInstance extends Sequelize.Instance<gm_ticketAttribute>, gm_ticketAttribute { }
export interface gm_ticketModel extends Sequelize.Model<gm_ticketInstance, gm_ticketAttribute> { }

// table: group_member
export interface group_memberAttribute {
  guid?:number;
  memberGuid?:number;
  memberFlags?:number;
  subgroup?:number;
  roles?:number;
}
export interface group_memberInstance extends Sequelize.Instance<group_memberAttribute>, group_memberAttribute { }
export interface group_memberModel extends Sequelize.Model<group_memberInstance, group_memberAttribute> { }

// table: groups
export interface groupsAttribute {
  guid?:number;
  leaderGuid?:number;
  lootMethod?:number;
  looterGuid?:number;
  lootThreshold?:number;
  icon1?:number;
  icon2?:number;
  icon3?:number;
  icon4?:number;
  icon5?:number;
  icon6?:number;
  icon7?:number;
  icon8?:number;
  groupType?:number;
  difficulty?:number;
  raidDifficulty?:number;
  masterLooterGuid?:number;
}
export interface groupsInstance extends Sequelize.Instance<groupsAttribute>, groupsAttribute { }
export interface groupsModel extends Sequelize.Model<groupsInstance, groupsAttribute> { }

// table: guild
export interface guildAttribute {
  guildid?:number;
  name?:string;
  leaderguid?:number;
  EmblemStyle?:number;
  EmblemColor?:number;
  BorderStyle?:number;
  BorderColor?:number;
  BackgroundColor?:number;
  info?:string;
  motd?:string;
  createdate?:number;
  BankMoney?:number;
}
export interface guildInstance extends Sequelize.Instance<guildAttribute>, guildAttribute { }
export interface guildModel extends Sequelize.Model<guildInstance, guildAttribute> { }

// table: guild_bank_eventlog
export interface guild_bank_eventlogAttribute {
  guildid?:any;
  LogGuid?:any;
  TabId?:any;
  EventType?:any;
  PlayerGuid?:number;
  ItemOrMoney?:number;
  ItemStackCount?:number;
  DestTabId?:any;
  TimeStamp?:any;
}
export interface guild_bank_eventlogInstance extends Sequelize.Instance<guild_bank_eventlogAttribute>, guild_bank_eventlogAttribute { }
export interface guild_bank_eventlogModel extends Sequelize.Model<guild_bank_eventlogInstance, guild_bank_eventlogAttribute> { }

// table: guild_bank_item
export interface guild_bank_itemAttribute {
  guildid?:number;
  TabId?:number;
  SlotId?:number;
  item_guid?:number;
}
export interface guild_bank_itemInstance extends Sequelize.Instance<guild_bank_itemAttribute>, guild_bank_itemAttribute { }
export interface guild_bank_itemModel extends Sequelize.Model<guild_bank_itemInstance, guild_bank_itemAttribute> { }

// table: guild_bank_right
export interface guild_bank_rightAttribute {
  guildid?:number;
  TabId?:number;
  rid?:number;
  gbright?:number;
  SlotPerDay?:number;
}
export interface guild_bank_rightInstance extends Sequelize.Instance<guild_bank_rightAttribute>, guild_bank_rightAttribute { }
export interface guild_bank_rightModel extends Sequelize.Model<guild_bank_rightInstance, guild_bank_rightAttribute> { }

// table: guild_bank_tab
export interface guild_bank_tabAttribute {
  guildid?:number;
  TabId?:number;
  TabName?:string;
  TabIcon?:string;
  TabText?:string;
}
export interface guild_bank_tabInstance extends Sequelize.Instance<guild_bank_tabAttribute>, guild_bank_tabAttribute { }
export interface guild_bank_tabModel extends Sequelize.Model<guild_bank_tabInstance, guild_bank_tabAttribute> { }

// table: guild_eventlog
export interface guild_eventlogAttribute {
  guildid?:any;
  LogGuid?:any;
  EventType?:any;
  PlayerGuid1?:any;
  PlayerGuid2?:any;
  NewRank?:any;
  TimeStamp?:any;
}
export interface guild_eventlogInstance extends Sequelize.Instance<guild_eventlogAttribute>, guild_eventlogAttribute { }
export interface guild_eventlogModel extends Sequelize.Model<guild_eventlogInstance, guild_eventlogAttribute> { }

// table: guild_member
export interface guild_memberAttribute {
  guildid?:any;
  guid?:number;
  rank?:number;
  pnote?:string;
  offnote?:string;
}
export interface guild_memberInstance extends Sequelize.Instance<guild_memberAttribute>, guild_memberAttribute { }
export interface guild_memberModel extends Sequelize.Model<guild_memberInstance, guild_memberAttribute> { }

// table: guild_member_withdraw
export interface guild_member_withdrawAttribute {
  guid?:number;
  tab0?:number;
  tab1?:number;
  tab2?:number;
  tab3?:number;
  tab4?:number;
  tab5?:number;
  money?:number;
}
export interface guild_member_withdrawInstance extends Sequelize.Instance<guild_member_withdrawAttribute>, guild_member_withdrawAttribute { }
export interface guild_member_withdrawModel extends Sequelize.Model<guild_member_withdrawInstance, guild_member_withdrawAttribute> { }

// table: guild_rank
export interface guild_rankAttribute {
  guildid?:number;
  rid?:number;
  rname?:string;
  rights?:number;
  BankMoneyPerDay?:number;
}
export interface guild_rankInstance extends Sequelize.Instance<guild_rankAttribute>, guild_rankAttribute { }
export interface guild_rankModel extends Sequelize.Model<guild_rankInstance, guild_rankAttribute> { }

// table: instance
export interface instanceAttribute {
  id?:number;
  map?:number;
  resettime?:number;
  difficulty?:number;
  completedEncounters?:number;
  data?:any;
}
export interface instanceInstance extends Sequelize.Instance<instanceAttribute>, instanceAttribute { }
export interface instanceModel extends Sequelize.Model<instanceInstance, instanceAttribute> { }

// table: instance_reset
export interface instance_resetAttribute {
  mapid?:number;
  difficulty?:number;
  resettime?:number;
}
export interface instance_resetInstance extends Sequelize.Instance<instance_resetAttribute>, instance_resetAttribute { }
export interface instance_resetModel extends Sequelize.Model<instance_resetInstance, instance_resetAttribute> { }

// table: item_instance
export interface item_instanceAttribute {
  guid?:number;
  itemEntry?:number;
  owner_guid?:number;
  creatorGuid?:number;
  giftCreatorGuid?:number;
  count?:number;
  duration?:number;
  charges?:any;
  flags?:number;
  enchantments?:string;
  randomPropertyId?:number;
  durability?:number;
  playedTime?:number;
  text?:string;
}
export interface item_instanceInstance extends Sequelize.Instance<item_instanceAttribute>, item_instanceAttribute { }
export interface item_instanceModel extends Sequelize.Model<item_instanceInstance, item_instanceAttribute> { }

// table: item_loot_storage
export interface item_loot_storageAttribute {
  containerGUID?:number;
  itemid?:number;
  count?:number;
  randomPropertyId?:number;
  randomSuffix?:number;
}
export interface item_loot_storageInstance extends Sequelize.Instance<item_loot_storageAttribute>, item_loot_storageAttribute { }
export interface item_loot_storageModel extends Sequelize.Model<item_loot_storageInstance, item_loot_storageAttribute> { }

// table: item_refund_instance
export interface item_refund_instanceAttribute {
  item_guid?:any;
  player_guid?:any;
  paidMoney?:number;
  paidExtendedCost?:number;
}
export interface item_refund_instanceInstance extends Sequelize.Instance<item_refund_instanceAttribute>, item_refund_instanceAttribute { }
export interface item_refund_instanceModel extends Sequelize.Model<item_refund_instanceInstance, item_refund_instanceAttribute> { }

// table: item_soulbound_trade_data
export interface item_soulbound_trade_dataAttribute {
  itemGuid?:any;
  allowedPlayers?:any;
}
export interface item_soulbound_trade_dataInstance extends Sequelize.Instance<item_soulbound_trade_dataAttribute>, item_soulbound_trade_dataAttribute { }
export interface item_soulbound_trade_dataModel extends Sequelize.Model<item_soulbound_trade_dataInstance, item_soulbound_trade_dataAttribute> { }

// table: lag_reports
export interface lag_reportsAttribute {
  reportId?:number;
  guid?:number;
  lagType?:number;
  mapId?:number;
  posX?:number;
  posY?:number;
  posZ?:number;
  latency?:number;
  createTime?:number;
}
export interface lag_reportsInstance extends Sequelize.Instance<lag_reportsAttribute>, lag_reportsAttribute { }
export interface lag_reportsModel extends Sequelize.Model<lag_reportsInstance, lag_reportsAttribute> { }

// table: lfg_data
export interface lfg_dataAttribute {
  guid?:any;
  dungeon?:number;
  state?:number;
}
export interface lfg_dataInstance extends Sequelize.Instance<lfg_dataAttribute>, lfg_dataAttribute { }
export interface lfg_dataModel extends Sequelize.Model<lfg_dataInstance, lfg_dataAttribute> { }

// table: log_arena_fights
export interface log_arena_fightsAttribute {
  fight_id?:number;
  time?:Date;
  type?:number;
  duration?:number;
  winner?:number;
  loser?:number;
  winner_tr?:number;
  winner_mmr?:number;
  winner_tr_change?:number;
  loser_tr?:number;
  loser_mmr?:number;
  loser_tr_change?:number;
  currOnline?:number;
}
export interface log_arena_fightsInstance extends Sequelize.Instance<log_arena_fightsAttribute>, log_arena_fightsAttribute { }
export interface log_arena_fightsModel extends Sequelize.Model<log_arena_fightsInstance, log_arena_fightsAttribute> { }

// table: log_arena_memberstats
export interface log_arena_memberstatsAttribute {
  fight_id?:number;
  member_id?:number;
  name?:string;
  guid?:number;
  team?:number;
  account?:number;
  ip?:string;
  damage?:number;
  heal?:number;
  kblows?:number;
}
export interface log_arena_memberstatsInstance extends Sequelize.Instance<log_arena_memberstatsAttribute>, log_arena_memberstatsAttribute { }
export interface log_arena_memberstatsModel extends Sequelize.Model<log_arena_memberstatsInstance, log_arena_memberstatsAttribute> { }

// table: log_encounter
export interface log_encounterAttribute {
  time?:Date;
  map?:number;
  difficulty?:number;
  creditType?:number;
  creditEntry?:number;
  playersInfo?:string;
}
export interface log_encounterInstance extends Sequelize.Instance<log_encounterAttribute>, log_encounterAttribute { }
export interface log_encounterModel extends Sequelize.Model<log_encounterInstance, log_encounterAttribute> { }

// table: log_money
export interface log_moneyAttribute {
  sender_acc?:number;
  sender_guid?:number;
  sender_name?:string;
  sender_ip?:string;
  receiver_acc?:number;
  receiver_name?:string;
  money?:number;
  topic?:string;
  date?:Date;
}
export interface log_moneyInstance extends Sequelize.Instance<log_moneyAttribute>, log_moneyAttribute { }
export interface log_moneyModel extends Sequelize.Model<log_moneyInstance, log_moneyAttribute> { }

// table: mail
export interface mailAttribute {
  id?:any;
  messageType?:number;
  stationery?:number;
  mailTemplateId?:number;
  sender?:string;
  receiver?:string;
  subject?:any;
  body?:any;
  has_items?:number;
  expire_time?:number;
  deliver_time?:number;
  money?:number;
  cod?:number;
  checked?:number;
}
export interface mailInstance extends Sequelize.Instance<mailAttribute>, mailAttribute { }
export interface mailModel extends Sequelize.Model<mailInstance, mailAttribute> { }

// table: mail_items
export interface mail_itemsAttribute {
  mail_id?:number;
  item_guid?:number;
  receiver?:string;
}
export interface mail_itemsInstance extends Sequelize.Instance<mail_itemsAttribute>, mail_itemsAttribute { }
export interface mail_itemsModel extends Sequelize.Model<mail_itemsInstance, mail_itemsAttribute> { }

// table: pet_aura
export interface pet_auraAttribute {
  guid?:any;
  casterGuid?:any;
  spell?:number;
  effectMask?:number;
  recalculateMask?:number;
  stackCount?:number;
  amount0?:number;
  amount1?:number;
  amount2?:number;
  base_amount0?:number;
  base_amount1?:number;
  base_amount2?:number;
  maxDuration?:number;
  remainTime?:number;
  remainCharges?:number;
}
export interface pet_auraInstance extends Sequelize.Instance<pet_auraAttribute>, pet_auraAttribute { }
export interface pet_auraModel extends Sequelize.Model<pet_auraInstance, pet_auraAttribute> { }

// table: pet_spell
export interface pet_spellAttribute {
  guid?:any;
  spell?:any;
  active?:number;
}
export interface pet_spellInstance extends Sequelize.Instance<pet_spellAttribute>, pet_spellAttribute { }
export interface pet_spellModel extends Sequelize.Model<pet_spellInstance, pet_spellAttribute> { }

// table: pet_spell_cooldown
export interface pet_spell_cooldownAttribute {
  guid?:any;
  spell?:any;
  time?:number;
}
export interface pet_spell_cooldownInstance extends Sequelize.Instance<pet_spell_cooldownAttribute>, pet_spell_cooldownAttribute { }
export interface pet_spell_cooldownModel extends Sequelize.Model<pet_spell_cooldownInstance, pet_spell_cooldownAttribute> { }

// table: petition
export interface petitionAttribute {
  ownerguid?:number;
  petitionguid?:number;
  name?:string;
  type?:number;
}
export interface petitionInstance extends Sequelize.Instance<petitionAttribute>, petitionAttribute { }
export interface petitionModel extends Sequelize.Model<petitionInstance, petitionAttribute> { }

// table: petition_sign
export interface petition_signAttribute {
  ownerguid?:number;
  petitionguid?:number;
  playerguid?:number;
  player_account?:number;
  type?:number;
}
export interface petition_signInstance extends Sequelize.Instance<petition_signAttribute>, petition_signAttribute { }
export interface petition_signModel extends Sequelize.Model<petition_signInstance, petition_signAttribute> { }

// table: pool_quest_save
export interface pool_quest_saveAttribute {
  pool_id?:number;
  quest_id?:number;
}
export interface pool_quest_saveInstance extends Sequelize.Instance<pool_quest_saveAttribute>, pool_quest_saveAttribute { }
export interface pool_quest_saveModel extends Sequelize.Model<pool_quest_saveInstance, pool_quest_saveAttribute> { }

// table: pvpstats_battlegrounds
export interface pvpstats_battlegroundsAttribute {
  id?:number;
  winner_faction?:number;
  bracket_id?:number;
  type?:number;
  date?:Date;
}
export interface pvpstats_battlegroundsInstance extends Sequelize.Instance<pvpstats_battlegroundsAttribute>, pvpstats_battlegroundsAttribute { }
export interface pvpstats_battlegroundsModel extends Sequelize.Model<pvpstats_battlegroundsInstance, pvpstats_battlegroundsAttribute> { }

// table: pvpstats_players
export interface pvpstats_playersAttribute {
  battleground_id?:number;
  character_guid?:number;
  winner?:boolean;
  score_killing_blows?:number;
  score_deaths?:number;
  score_honorable_kills?:number;
  score_bonus_honor?:number;
  score_damage_done?:number;
  score_healing_done?:number;
  attr_1?:number;
  attr_2?:number;
  attr_3?:number;
  attr_4?:number;
  attr_5?:number;
}
export interface pvpstats_playersInstance extends Sequelize.Instance<pvpstats_playersAttribute>, pvpstats_playersAttribute { }
export interface pvpstats_playersModel extends Sequelize.Model<pvpstats_playersInstance, pvpstats_playersAttribute> { }

// table: quest_tracker
export interface quest_trackerAttribute {
  id?:number;
  character_guid?:number;
  quest_accept_time?:Date;
  quest_complete_time?:Date;
  quest_abandon_time?:Date;
  completed_by_gm?:number;
  core_hash?:string;
  core_revision?:string;
}
export interface quest_trackerInstance extends Sequelize.Instance<quest_trackerAttribute>, quest_trackerAttribute { }
export interface quest_trackerModel extends Sequelize.Model<quest_trackerInstance, quest_trackerAttribute> { }

// table: recovery_item
export interface recovery_itemAttribute {
  Id?:number;
  Guid?:number;
  ItemEntry?:number;
  Count?:number;
}
export interface recovery_itemInstance extends Sequelize.Instance<recovery_itemAttribute>, recovery_itemAttribute { }
export interface recovery_itemModel extends Sequelize.Model<recovery_itemInstance, recovery_itemAttribute> { }

// table: reserved_name
export interface reserved_nameAttribute {
  name?:string;
}
export interface reserved_nameInstance extends Sequelize.Instance<reserved_nameAttribute>, reserved_nameAttribute { }
export interface reserved_nameModel extends Sequelize.Model<reserved_nameInstance, reserved_nameAttribute> { }

// table: version_db_characters
export interface version_db_charactersAttribute {
  sql_rev?:string;
  required_rev?:string;
  2020_01_04_00?:boolean;
}
export interface version_db_charactersInstance extends Sequelize.Instance<version_db_charactersAttribute>, version_db_charactersAttribute { }
export interface version_db_charactersModel extends Sequelize.Model<version_db_charactersInstance, version_db_charactersAttribute> { }

// table: warden_action
export interface warden_actionAttribute {
  wardenId?:number;
  action?:number;
}
export interface warden_actionInstance extends Sequelize.Instance<warden_actionAttribute>, warden_actionAttribute { }
export interface warden_actionModel extends Sequelize.Model<warden_actionInstance, warden_actionAttribute> { }

// table: worldstates
export interface worldstatesAttribute {
  entry?:number;
  value?:number;
  comment?:any;
}
export interface worldstatesInstance extends Sequelize.Instance<worldstatesAttribute>, worldstatesAttribute { }
export interface worldstatesModel extends Sequelize.Model<worldstatesInstance, worldstatesAttribute> { }
