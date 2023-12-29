var e=Object.defineProperty,t=(t,a,s)=>(((t,a,s)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s})(t,"symbol"!=typeof a?a+"":a,s),s);import{A as a,fj as s,g2 as l,T as n,g3 as i,g4 as o,g5 as d,aU as r,g6 as c,ea as p,L as m,p as h,q as g,g7 as u,E as I,cn as S,cq as v,cs as T,a2 as f,ab as O,F as A,a5 as R,aG as b,bq as E,w as y,B as w,aH as C,S as x,g as G,u as P,bF as W}from"./detailed_results-bc3a1d81.chunk.js";import{m as H,a as N,l as k,y as M,c as B,b as D,d as U,o as F,e as V,f as L,r as q,s as j,Z as _,T as K,x as z,I as Z}from"./preset_utils-40b1d43e.chunk.js";import{P as J}from"./suggest_gems_action-fb3d9b7d.chunk.js";const Q=H({fieldName:"useRecklessness",id:a.fromSpellId(1719)}),X=H({fieldName:"useShatteringThrow",id:a.fromSpellId(64382)}),Y=N({fieldName:"startingRage",label:"Starting Rage",labelTooltip:"Initial rage at the start of each iteration."}),$=k({fieldName:"stanceSnapshot",label:"Stance Snapshot",labelTooltip:"Ability that is cast at the same time as stance swap will benefit from the bonus of the stance before the swap."}),ee=k({fieldName:"disableExpertiseGemming",label:"Disable expertise gemming",labelTooltip:"Disables auto gemming for expertise"}),te=M({fieldName:"shout",values:[{color:"c79c6e",value:s.WarriorShoutNone},{actionId:a.fromSpellId(2048),value:s.WarriorShoutBattle},{actionId:a.fromSpellId(469),value:s.WarriorShoutCommanding}]}),ae={inputs:[B({fieldName:"useMs",label:"Use Mortal Strike",labelTooltip:"Use Mortal Strike when rage threshold is met.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>0==e.getTalentTree()&&!e.getRotation().customRotationOption}),B({fieldName:"useCleave",label:"Use Cleave",labelTooltip:"Use Cleave instead of Heroic Strike.",showWhen:e=>!e.getRotation().customRotationOption}),B({fieldName:"useRend",label:"Use Rend",labelTooltip:"Use Rend when rage threshold is met and the debuff duration is less than refresh time.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>!e.getRotation().customRotationOption}),B({fieldName:"useOverpower",label:"Use Overpower",labelTooltip:"Use Overpower whenever it is available on an open GCD.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getTalentTree()&&!e.getRotation().customRotationOption}),D({fieldName:"mainGcd",label:"Main GCD",labelTooltip:"Main GCD ability that will be prioritized above other abilities.",values:[{name:"Slam",value:l.Slam},{name:"Bloodthirst",value:l.Bloodthirst},{name:"Whirlwind",value:l.Whirlwind}],changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getTalentTree()&&!e.getRotation().customRotationOption}),U({fieldName:"msRageThreshold",label:"Mortal Strike rage threshold",labelTooltip:"Mortal Strike when rage is above:",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>(e.getRotation().useMs||e.getRotation().customRotationOption)&&0==e.getTalentTree()}),U({fieldName:"slamRageThreshold",label:"Slam rage threshold",labelTooltip:"Slam when rage is above:",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>(e.getRotation().useMs||e.getRotation().customRotationOption)&&0==e.getTalentTree()}),U({fieldName:"bloodsurgeDurationThreshold",label:"Exp Slam: Bloodsurge duration threshold (s)",labelTooltip:"Cast Exp Slam when Bloodsurge duration is below (seconds):",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>e.getRotation().customRotationOption&&1==e.getTalentTree()}),U({fieldName:"hsRageThreshold",label:"HS rage threshold",labelTooltip:"Heroic Strike when rage is above:"}),U({fieldName:"rendHealthThresholdAbove",label:"Rend health threshold (%)",labelTooltip:"Rend will only be used when boss health is above this value in %.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getRotation().useRend||e.getRotation().customRotationOption}),U({fieldName:"rendRageThresholdBelow",label:"Rend rage threshold below",labelTooltip:"Rend will only be used when rage is smaller than this value.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>(1==e.getRotation().useRend||e.getRotation().customRotationOption)&&1==e.getTalentTree()}),U({fieldName:"rendCdThreshold",label:"Rend Refresh Time (s)",labelTooltip:"Refresh Rend when the remaining duration is less than this amount of time (seconds).",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getRotation().useRend||e.getRotation().customRotationOption}),B({fieldName:"useHsDuringExecute",label:"HS during Execute Phase",labelTooltip:"Use Heroic Strike during Execute Phase."}),B({fieldName:"useBtDuringExecute",label:"BT during Execute Phase",labelTooltip:"Use Bloodthirst during Execute Phase.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getTalentTree()}),B({fieldName:"useWwDuringExecute",label:"WW during Execute Phase",labelTooltip:"Use Whirlwind during Execute Phase.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getTalentTree()}),B({fieldName:"useSlamOverExecute",label:"Slam during Execute Phase",labelTooltip:"Use Slam Over Execute when Bloodsurge Procs in Execute Phase.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>1==e.getTalentTree()}),B({fieldName:"executePhaseOverpower",label:"Overpower in Execute Phase",labelTooltip:"Use Overpower instead of Execute whenever it is available.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>(1==e.getRotation().useOverpower||e.getRotation().customRotationOption)&&1==e.getTalentTree()}),B({fieldName:"spamExecute",label:"Spam Execute",labelTooltip:"Use Execute whenever possible during Execute Phase.",changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>0==e.getTalentTree()}),D({fieldName:"sunderArmor",label:"Sunder Armor",values:[{name:"Never",value:i.SunderArmorNone},{name:"Help Stack",value:i.SunderArmorHelpStack},{name:"Maintain Debuff",value:i.SunderArmorMaintain}]}),D({fieldName:"stanceOption",label:"Stance Option",labelTooltip:"Stance to stay on. The default for Fury (Bloodthirst) is Berserker Stance and Battle Stance for everything else.",values:[{name:"Default",value:o.DefaultStance},{name:"Battle Stance",value:o.BattleStance},{name:"Berserker Stance",value:o.BerserkerStance}]}),B({fieldName:"maintainDemoShout",label:"Maintain Demo Shout",labelTooltip:"Keep Demo Shout active on the primary target."}),B({fieldName:"maintainThunderClap",label:"Maintain Thunder Clap",labelTooltip:"Keep Thunder Clap active on the primary target."}),B({fieldName:"customRotationOption",label:"Custom Rotation (Advanced)",labelTooltip:"Create your own rotation action priority list.",showWhen:e=>e.sim.getShowExperimental(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),F({fieldName:"customRotation",numColumns:3,showWhen:e=>e.getRotation().customRotationOption&&e.sim.getShowExperimental(),values:[{actionId:a.fromSpellId(23881),value:d.BloodthirstCustom},{actionId:a.fromSpellId(1680),value:d.WhirlwindCustom},{actionId:a.fromSpellId(47475),value:d.SlamCustom},{actionId:a.fromSpellId(47475),value:d.SlamExpiring,text:"Exp",showWhen:e=>1==e.getTalentTree()},{actionId:a.fromSpellId(47486),value:d.MortalStrike},{actionId:a.fromSpellId(47465),value:d.Rend},{actionId:a.fromSpellId(7384),value:d.Overpower},{actionId:a.fromSpellId(47471),value:d.Execute},{actionId:a.fromSpellId(47502),value:d.ThunderClap}]})]},se={items:[{id:40528,enchant:3817,gems:[41398,42153]},{id:44664,gems:[39996]},{id:40530,enchant:3808,gems:[40038]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[42153]},{id:40330,enchant:3845,gems:[40002,0]},{id:40541,enchant:3604,gems:[0]},{id:40205,gems:[42153]},{id:40318,enchant:3823,gems:[49110,40038]},{id:40591,enchant:3606},{id:43993,gems:[40002]},{id:40474},{id:42987},{id:40256},{id:40384,enchant:3789},{},{id:40385}]},le={items:[{id:46151,enchant:3817,gems:[41398,42142]},{id:45459,gems:[40002]},{id:46149,enchant:3808,gems:[42153]},{id:46032,enchant:3605,gems:[39996,40037]},{id:46146,enchant:3832,gems:[42153,39996]},{id:45663,enchant:3845,gems:[39996,0]},{id:46148,enchant:3604,gems:[40037,0]},{id:45241,gems:[49110,40037,39996]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:45599,enchant:3606,gems:[40002,40002]},{id:45608,gems:[39996]},{id:46322,gems:[39996]},{id:46038},{id:45931},{id:45533,enchant:3789,gems:[39996,39996]},{},{id:45296,gems:[39996]}]},ne={items:[{id:49478,enchant:3817,gems:[41398,40117]},{id:47915,gems:[40117]},{id:48381,enchant:3808,gems:[42142]},{id:47545,enchant:3605,gems:[40117]},{id:48385,enchant:3832,gems:[42142,42142]},{id:47074,enchant:3845,gems:[40143,0]},{id:47240,enchant:3604,gems:[49110,40117,0]},{id:47153,gems:[40143,40117,40117]},{id:47191,enchant:3823,gems:[40117,40117,40117]},{id:47077,enchant:3606,gems:[40143,40117]},{id:47934,gems:[40142]},{id:45608,gems:[40117]},{id:47131},{id:46038},{id:47078,enchant:3789,gems:[40117,40117]},{},{id:45296,gems:[40117]}]},ie={items:[{id:48383,enchant:3817,gems:[41398,40117]},{id:47915,gems:[40117]},{id:48381,enchant:3808,gems:[42153]},{id:47545,enchant:3605,gems:[40117]},{id:48385,enchant:3832,gems:[42153,42153]},{id:47074,enchant:3845,gems:[40117,0]},{id:47240,enchant:3604,gems:[49110,40117,0]},{id:47153,gems:[40117,40117,40117]},{id:48382,enchant:3823,gems:[40142,40117]},{id:47077,enchant:3606,gems:[40117,40117]},{id:47934,gems:[40117]},{id:45608,gems:[40117]},{id:46038},{id:47131},{id:47078,enchant:3789,gems:[40117,40117]},{},{id:46995,gems:[40117]}]},oe={items:[{id:49478,enchant:3817,gems:[41398,40111]},{id:45459,gems:[40111]},{id:48400,enchant:3808,gems:[42153]},{id:47546,enchant:3605,gems:[40111]},{id:48396,enchant:3832,gems:[42153,42153]},{id:47442,enchant:3845,gems:[40143,0]},{id:47492,enchant:3604,gems:[49110,40117,0]},{id:47472,gems:[40143,40117,40117]},{id:47480,enchant:3823,gems:[40117,40117,40117]},{id:47445,enchant:3606,gems:[40143,40117]},{id:48007,gems:[40143]},{id:45608,gems:[40117]},{id:47464},{id:46038},{id:47446,enchant:3789,gems:[40111,40111]},{},{id:47428,gems:[40111]}]},de={items:[{id:48398,enchant:3817,gems:[41398,40117]},{id:47988,gems:[40117]},{id:48400,enchant:3808,gems:[42153]},{id:47546,enchant:3605,gems:[40117]},{id:48396,enchant:3832,gems:[42153,42153]},{id:47442,enchant:3845,gems:[40117,0]},{id:47492,enchant:3604,gems:[49110,40117,0]},{id:47472,gems:[40117,40117,40117]},{id:48399,enchant:3823,gems:[40142,40117]},{id:47445,enchant:3606,gems:[40117,40117]},{id:48007,gems:[40117]},{id:45608,gems:[40117]},{id:46038},{id:47464},{id:47446,enchant:3789,gems:[40117,40117]},{},{id:47428,gems:[40117]}]},re={items:[{id:51227,enchant:3817,gems:[41398,40111]},{id:50728,gems:[40143]},{id:51229,enchant:3808,gems:[40111]},{id:47545,enchant:3605,gems:[40111]},{id:51225,enchant:3832,gems:[40111,49110]},{id:50670,enchant:3845,gems:[40143,0]},{id:51226,enchant:3604,gems:[40125,0]},{id:50707,gems:[40117,40117,40117]},{id:50645,enchant:3823,gems:[42153,42153,42142]},{id:50607,enchant:3606,gems:[40125,40125]},{id:50402,gems:[40143]},{id:50618,gems:[40117]},{id:50343},{id:50363},{id:49623,enchant:3789,gems:[40111,40111,40111]},{},{id:50733,enchant:3608,gems:[40111]}]},ce={items:[{id:51227,enchant:3817,gems:[41398,40111]},{id:50728,gems:[40125]},{id:51229,enchant:3808,gems:[40111]},{id:47546,enchant:3605,gems:[40111]},{id:51225,enchant:3832,gems:[40111,49110]},{id:50670,enchant:3845,gems:[40125,0]},{id:51226,enchant:3604,gems:[40125,0]},{id:50707,gems:[40117,40117,40117]},{id:50645,enchant:3823,gems:[42153,42153,42142]},{id:50607,enchant:3606,gems:[40125,40125]},{id:50402,gems:[40125]},{id:50618,gems:[40117]},{id:47131},{id:50363},{id:49623,enchant:3789,gems:[40111,40111,40111]},{},{id:50733,enchant:3608,gems:[40111]}]},pe={items:[{id:41386,enchant:3817,gems:[41398,42702]},{id:42645,gems:[40003]},{id:44195,enchant:3808},{id:37647,enchant:3605},{id:39606,enchant:3832,gems:[40003,40003]},{id:44203,enchant:3845,gems:[0]},{id:39609,enchant:3604,gems:[40037,0]},{id:40694,gems:[42149,42149]},{id:44205,enchant:3823},{id:44306,enchant:3606,gems:[40037,40037]},{id:42642,gems:[42149]},{id:37642},{id:42987},{id:40684},{id:37852,enchant:3789},{id:37852,enchant:3789},{id:37191}]},me={items:[{id:44006,enchant:3817,gems:[41285,42702]},{id:44664,gems:[39996]},{id:40530,enchant:3808,gems:[40037]},{id:40403,enchant:3605},{id:40539,enchant:3832,gems:[42142]},{id:39765,enchant:3845,gems:[39996,0]},{id:40541,enchant:3604,gems:[0]},{id:40205,gems:[42142]},{id:40529,enchant:3823,gems:[39996,40022]},{id:40591,enchant:3606},{id:43993,gems:[42142]},{id:40717},{id:42987},{id:40256},{id:40384,enchant:3789},{id:40384,enchant:3789},{id:40385}]},he={items:[{id:46151,enchant:3817,gems:[41398,39996]},{id:45517,gems:[39996]},{id:46149,enchant:3808,gems:[39996]},{id:46032,enchant:3605,gems:[39996,40037]},{id:46146,enchant:3832,gems:[39996,42702]},{id:45611,enchant:3845,gems:[40037,0]},{id:46148,enchant:3604,gems:[40058]},{id:46095,gems:[42154,42142,42142]},{id:45536,enchant:3823,gems:[39996,39996,39996]},{id:40591,enchant:3606},{id:45608,gems:[39996]},{id:45534,gems:[39996]},{id:42987},{id:45931},{id:45516,enchant:3789,gems:[39996,39996]},{id:45516,enchant:3789,gems:[39996,39996]},{id:45296,gems:[39996]}]},ge={items:[{id:48383,enchant:3817,gems:[41398,49110]},{id:47060,gems:[40117]},{id:48381,enchant:3808,gems:[40111]},{id:47545,enchant:3831,gems:[40111]},{id:48385,enchant:3832,gems:[40117,40117]},{id:47074,enchant:3845,gems:[40143,0]},{id:47240,enchant:3604,gems:[40111,40111,0]},{id:47002,gems:[40143,40143,40111]},{id:48382,enchant:3823,gems:[40142,40117]},{id:47154,enchant:3606,gems:[40142,40117]},{id:46966,gems:[40143]},{id:47075,gems:[40111]},{id:45931},{id:47131},{id:47078,enchant:3789,gems:[42142,40111]},{id:47078,enchant:3789,gems:[42142,42142]},{id:46995,gems:[40111]}]},ue={items:[{id:48398,enchant:3817,gems:[41398,49110]},{id:47433,gems:[40111]},{id:48400,enchant:3808,gems:[40117]},{id:47546,enchant:3831,gems:[40111]},{id:48396,enchant:3832,gems:[40111,40111]},{id:47414,enchant:3845,gems:[40142,0]},{id:47240,enchant:3604,gems:[40111,40111,0]},{id:47429,gems:[40142,40142,42142]},{id:48399,enchant:3823,gems:[40142,40111]},{id:47445,enchant:3606,gems:[40142,45862]},{id:47413,gems:[40142]},{id:47443,gems:[40111]},{id:45931},{id:47464},{id:47446,enchant:3789,gems:[40117,40117]},{id:47446,enchant:3789,gems:[42142,42142]},{id:47428,gems:[40117]}]},Ie={items:[{id:51227,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51229,enchant:3808,gems:[40117]},{id:47545,enchant:3831,gems:[40117]},{id:51225,enchant:3832,gems:[40117,49110]},{id:50670,enchant:3845,gems:[42156,0]},{id:50675,enchant:3604,gems:[40143,40117,0]},{id:50620,gems:[40143,40111,40111]},{id:51228,enchant:3823,gems:[40111,40111]},{id:50639,enchant:3606,gems:[40143,40117]},{id:50618,gems:[40117]},{id:50402,gems:[40143]},{id:50343},{id:50363},{id:49623,enchant:3789,gems:[40111,42153,42153]},{id:50730,enchant:3789,gems:[40117,40117,40117]},{id:50733,gems:[40111]}]},Se={items:[{id:51227,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51229,enchant:3808,gems:[40117]},{id:47546,enchant:3831,gems:[40117]},{id:51225,enchant:3832,gems:[40117,49110]},{id:50670,enchant:3845,gems:[40125,0]},{id:50675,enchant:3604,gems:[40143,40117,0]},{id:50620,gems:[40125,40117,40117]},{id:51228,enchant:3823,gems:[40111,40111]},{id:50639,enchant:3606,gems:[42156,40143]},{id:50618,gems:[40117]},{id:50402,gems:[40143]},{id:50343},{id:50363},{id:49623,enchant:3789,gems:[40117,42153,42153]},{id:50730,enchant:3789,gems:[40117,40111,40111]},{id:50733,gems:[40111]}]},ve={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:18499}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:12292}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:2458}}},{cmp:{op:"OpLe",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:2687}}}},{hide:!0,action:{condition:{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{auraIsActive:{auraId:{spellId:12292}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:1680}}}},{action:{castSpell:{spellId:{spellId:23881}}}},{action:{castSpell:{spellId:{spellId:1680}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"6s"}}}},castSpell:{spellId:{spellId:64382}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{or:{vals:[{auraIsActive:{auraId:{spellId:46916}}},{auraIsActive:{auraId:{spellId:70847}}}]}}]}},castSpell:{spellId:{spellId:47475}}}},{hide:!0,action:{condition:{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"8s"}}}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{dotIsActive:{spellId:{spellId:47465}}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:47465}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{auraIsActive:{auraId:{spellId:68051}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:7384}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:57755}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:2458}}}}},castSpell:{spellId:{spellId:2458}}}}]},Te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2458}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:18499}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:12292}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:2458}}},{cmp:{op:"OpLe",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}}]}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}}}}]}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{auraIsActive:{auraId:{spellId:12292}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"12"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:1680}}}},{action:{castSpell:{spellId:{spellId:23881}}}},{action:{castSpell:{spellId:{spellId:1680}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"6s"}}}},castSpell:{spellId:{spellId:64382}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{or:{vals:[{auraIsActive:{auraId:{spellId:46916}}},{auraIsActive:{auraId:{spellId:70847}}}]}}]}},castSpell:{spellId:{spellId:47475}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"8s"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}}}}]}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{not:{val:{dotIsActive:{spellId:{spellId:47465}}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:47465}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{gcdIsReady:{}},{auraIsActive:{auraId:{spellId:68051}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:7384}}},{castSpell:{spellId:{spellId:2458}}}]}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:23881}}},rhs:{const:{val:"1s"}}}},{cmp:{op:"OpGe",lhs:{spellTimeToReady:{spellId:{spellId:1680}}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:57755}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:2458}}}}},castSpell:{spellId:{spellId:2458}}}}]},fe={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:2457}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"35"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{hide:!0,action:{condition:{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:47465}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"7s"}}}}]}},castSpell:{spellId:{spellId:47465}}}},{action:{condition:{auraIsActive:{auraId:{spellId:68051}}},castSpell:{spellId:{spellId:7384}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"3.5s"}}}},castSpell:{spellId:{spellId:46924}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{spellId:47486}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47502}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47475}}}}]},Oe={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2687}}},doAtValue:{const:{val:"-10s"}}},{action:{castSpell:{spellId:{spellId:1719}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:2457}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentRage:{}},rhs:{const:{val:"20"}}}},castSpell:{spellId:{spellId:2687}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"35"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47520,tag:1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"40"}}}},{cmp:{op:"OpLe",lhs:{autoTimeToNext:{}},rhs:{const:{val:"1ms"}}}},{cmp:{op:"OpEq",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47450,tag:1}}}},{action:{condition:{and:{vals:[{auraShouldRefresh:{auraId:{spellId:47467},maxOverlap:{const:{val:"3s"}}}},{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:8647}}}}}]}},castSpell:{spellId:{spellId:47467}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:47465}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"7s"}}}}]}},castSpell:{spellId:{spellId:47465}}}},{action:{condition:{auraIsActive:{auraId:{spellId:68051}}},castSpell:{spellId:{spellId:7384}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"3.5s"}}}},castSpell:{spellId:{spellId:46924}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},castSpell:{spellId:{spellId:47486}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47471}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:47502}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"15"}}}},castSpell:{spellId:{spellId:47475}}}}]},Ae=V("Preraid Arms",{items:[{id:41386,enchant:3817,gems:[41285,42702]},{id:42645,gems:[40002]},{id:44195,enchant:3808},{id:37647,enchant:3605},{id:39606,enchant:3832,gems:[40002,40002]},{id:41355,enchant:3845,gems:[0]},{id:39609,enchant:3604,gems:[40037,0]},{id:40694,gems:[42149,42149]},{id:37193,enchant:3823,gems:[40002,40037]},{id:44306,enchant:3606,gems:[40086,40002]},{id:42642,gems:[42149]},{id:37642},{id:42987},{id:40684},{id:37852,enchant:3789},{},{id:37191}]},{talentTree:0}),Re=V("P1 Arms",se,{talentTree:0}),be=V("P2 Arms",le,{talentTree:0}),Ee=V("P3 Arms 2p [A]",ne,{talentTree:0,faction:r.Alliance}),ye=V("P3 Arms 4p [A]",ie,{talentTree:0,faction:r.Alliance}),we=V("P3 Arms 2p [H]",oe,{talentTree:0,faction:r.Horde}),Ce=V("P3 Arms 4p [H]",de,{talentTree:0,faction:r.Horde}),xe=V("P4 Arms [A]",re,{talentTree:0,faction:r.Alliance}),Ge=V("P4 Arms [H]",ce,{talentTree:0,faction:r.Horde}),Pe=V("Preraid Fury",pe,{talentTrees:[1,2]}),We=V("P1 Fury",me,{talentTrees:[1,2]}),He=V("P2 Fury",he,{talentTrees:[1,2]}),Ne=V("P3 Fury [A]",ge,{talentTrees:[1,2],faction:r.Alliance}),ke=V("P3 Fury [H]",ue,{talentTrees:[1,2],faction:r.Horde}),Me=V("P4 Fury [A]",Ie,{talentTrees:[1,2],faction:r.Alliance}),Be=V("P4 Fury [H]",Se,{talentTrees:[1,2],faction:r.Horde}),De=c.create({useRend:!0,useCleave:!1,useOverpower:!1,executePhaseOverpower:!1,mainGcd:l.Bloodthirst,sunderArmor:i.SunderArmorMaintain,hsRageThreshold:12,rendHealthThresholdAbove:20,rendRageThresholdBelow:100,slamRageThreshold:25,rendCdThreshold:0,useHsDuringExecute:!0,useBtDuringExecute:!0,useWwDuringExecute:!0,useSlamOverExecute:!0,stanceOption:o.DefaultStance});c.create({useRend:!0,useMs:!0,useCleave:!1,sunderArmor:i.SunderArmorMaintain,msRageThreshold:30,slamRageThreshold:25,hsRageThreshold:50,rendCdThreshold:0,rendHealthThresholdAbove:100,useHsDuringExecute:!0,spamExecute:!0,stanceOption:o.DefaultStance});const Ue=L("Fury",ve,{talentTree:1}),Fe=L("Fury + Sunder",Te,{talentTree:1}),Ve=L("Arms",fe,{talentTree:0}),Le=L("Arms + Sunder",Oe,{talentTree:0}),qe={name:"Arms",data:p.create({talentsString:"3022032023335100102012213231251-305-2033",glyphs:m.create({major1:h.GlyphOfRending,major2:h.GlyphOfMortalStrike,major3:h.GlyphOfExecution,minor1:g.GlyphOfThunderClap,minor2:g.GlyphOfCommand,minor3:g.GlyphOfShatteringThrow})})},je={name:"Fury",data:p.create({talentsString:"32002301233-305053000520310053120500351",glyphs:m.create({major1:h.GlyphOfWhirlwind,major2:h.GlyphOfHeroicStrike,major3:h.GlyphOfExecution,minor1:g.GlyphOfCommand,minor2:g.GlyphOfShatteringThrow,minor3:g.GlyphOfCharge})})},_e=u.create({startingRage:0,useRecklessness:!0,useShatteringThrow:!0,disableExpertiseGemming:!1,shout:s.WarriorShoutCommanding}),Ke=I.create({flask:S.FlaskOfEndlessRage,food:v.FoodSpicedWormBurger,defaultPotion:T.IndestructiblePotion,prepopPotion:T.PotionOfSpeed}),ze=q(x.SpecWarrior,{cssClass:"warrior-sim-ui",cssScheme:"warrior",knownIssues:[],epStats:[f.StatStrength,f.StatAgility,f.StatAttackPower,f.StatExpertise,f.StatMeleeHit,f.StatMeleeCrit,f.StatMeleeHaste,f.StatArmorPenetration,f.StatArmor],epPseudoStats:[O.PseudoStatMainHandDps,O.PseudoStatOffHandDps],epReferenceStat:f.StatAttackPower,displayStats:[f.StatHealth,f.StatStamina,f.StatStrength,f.StatAgility,f.StatAttackPower,f.StatExpertise,f.StatMeleeHit,f.StatMeleeCrit,f.StatMeleeHaste,f.StatArmorPenetration,f.StatArmor],modifyDisplayStats:e=>{let t=new A;return e.getInFrontOfTarget()||(t=t.addStat(f.StatExpertise,4*e.getTalents().weaponMastery*R)),{talents:t}},defaults:{gear:Ne.gear,epWeights:A.fromMap({[f.StatStrength]:2.72,[f.StatAgility]:1.82,[f.StatAttackPower]:1,[f.StatExpertise]:2.55,[f.StatMeleeHit]:.79,[f.StatMeleeCrit]:2.12,[f.StatMeleeHaste]:1.72,[f.StatArmorPenetration]:2.17,[f.StatArmor]:.03},{[O.PseudoStatMainHandDps]:6.29,[O.PseudoStatOffHandDps]:3.58}),consumes:Ke,rotation:De,talents:je.data,specOptions:_e,raidBuffs:b.create({giftOfTheWild:E.TristateEffectImproved,swiftRetribution:!0,strengthOfEarthTotem:E.TristateEffectImproved,icyTalons:!0,abominationsMight:!0,leaderOfThePack:E.TristateEffectRegular,sanctifiedRetribution:!0,bloodlust:!0,devotionAura:E.TristateEffectImproved,stoneskinTotem:E.TristateEffectImproved}),partyBuffs:y.create({heroicPresence:!1}),individualBuffs:w.create({blessingOfKings:!0,blessingOfMight:E.TristateEffectImproved}),debuffs:C.create({bloodFrenzy:!0,heartOfTheCrusader:!0,mangle:!0,sunderArmor:!0,curseOfWeakness:E.TristateEffectRegular,faerieFire:E.TristateEffectImproved,ebonPlaguebringer:!0})},playerIconInputs:[te,Q,X],rotationInputs:ae,includeBuffDebuffInputs:[j,_],excludeBuffDebuffInputs:[],otherInputs:{inputs:[Y,$,ee,K,z]},encounterPicker:{showExecuteProportion:!0},presets:{talents:[qe,je],rotations:[Ue,Fe,Ve,Le],gear:[Pe,We,He,Ne,ke,Me,Be,Ae,Re,be,Ee,ye,we,Ce,xe,Ge]},autoRotation:e=>0==e.getTalentTree()?Le.rotation.rotation:Fe.rotation.rotation,raidSimPresets:[{spec:x.SpecWarrior,tooltip:"Arms Warrior",defaultName:"Arms",iconUrl:G(P.ClassWarrior,0),talents:qe.data,specOptions:_e,consumes:Ke,defaultFactionRaces:{[r.Unknown]:W.RaceUnknown,[r.Alliance]:W.RaceHuman,[r.Horde]:W.RaceOrc},defaultGear:{[r.Unknown]:{},[r.Alliance]:{1:Re.gear,2:be.gear,3:ye.gear,4:xe.gear},[r.Horde]:{1:Re.gear,2:be.gear,3:Ce.gear,4:Ge.gear}}},{spec:x.SpecWarrior,tooltip:"Fury Warrior",defaultName:"Fury",iconUrl:G(P.ClassWarrior,1),talents:je.data,specOptions:_e,consumes:Ke,defaultFactionRaces:{[r.Unknown]:W.RaceUnknown,[r.Alliance]:W.RaceHuman,[r.Horde]:W.RaceOrc},defaultGear:{[r.Unknown]:{},[r.Alliance]:{1:We.gear,2:He.gear,3:Ne.gear,4:Me.gear},[r.Horde]:{1:We.gear,2:He.gear,3:ke.gear,4:Be.gear}}}]});class Ze extends Z{constructor(e,t){super(e,t,ze),new Je(this)}}class Je extends J{constructor(e){super(e,!0,!0,!1,!0),t(this,"player"),this.player=e.player}updateGemPriority(e,t){this.useExpGems=!this.player.getSpecOptions().disableExpertiseGemming,super.updateGemPriority(e,t)}calcExpTarget(){let e=super.calcExpTarget();const t=this.player.getTalents().weaponMastery;return!!t&&(e-=4*t*R),e}}export{Ze as W};
//# sourceMappingURL=sim-3657c302.chunk.js.map