import{e4 as o,e1 as t,cj as n}from"./detailed_results-bc3a1d81.chunk.js";function s(o){return o.cooldowns.filter((o=>o.id)).map((o=>function(o,s){return t.fromJsonString(`{"schedule":{"schedule":"${o}","innerAction":{"castSpell":{"spellId":${n.toJsonString(s)}}}}}`)}(o.timings.map((o=>o.toFixed(1)+"s")).join(", "),o.id)))}function r(n,r,e){return[[(c=r,o.fromJsonString(`{"action":{"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}},"doAtValue":{"const":{"val":"${c||"-1s"}"}}}`))],[(i=e,i?t.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"currentTime":{}},"rhs":{"const":{"val":"${i}"}}}},"autocastOtherCooldowns":{}}`):t.fromJsonString('{"autocastOtherCooldowns":{}}')),s(n)].flat()];var i,c}export{r as s};
//# sourceMappingURL=apl_utils-17f765e9.chunk.js.map