package druid

import (
	"time"

	"github.com/wowsims/wotlk/sim/core/proto"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/items"
	"github.com/wowsims/wotlk/sim/core/stats"
)

// Idol IDs
const IvoryMoongoddess int32 = 27518
const ShootingStar int32 = 40321

func (druid *Druid) applySwiftStarfireBonus(sim *core.Simulation, cast *core.Cast) {
	if druid.SwiftStarfireAura.IsActive() && druid.SetBonuses.balance_pvp_4 {
		cast.CastTime -= 1500 * time.Millisecond
		druid.SwiftStarfireAura.Deactivate(sim)
	}
}

func (druid *Druid) registerStarfireSpell() {
	actionID := core.ActionID{SpellID: 48465}
	baseCost := 0.16 * druid.BaseMana
	spellCoeff := 1.0 * (1 + 0.04*float64(druid.Talents.WrathOfCenarius))
	manaMetrics := druid.NewManaMetrics(core.ActionID{SpellID: 24858})

	// This seems to be unaffected by wrath of cenarius so it needs to come first.
	bonusFlatDamage := core.TernaryFloat64(druid.Equip[items.ItemSlotRanged].ID == IvoryMoongoddess, 55*spellCoeff, 0) +
		core.TernaryFloat64(druid.Equip[items.ItemSlotRanged].ID == ShootingStar, 165*spellCoeff, 0)

	druid.Starfire = druid.RegisterSpell(core.SpellConfig{
		ActionID:     actionID,
		SpellSchool:  core.SpellSchoolArcane,
		ProcMask:     core.ProcMaskSpellDamage,
		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost:     baseCost * druid.TalentsBonuses.moonglowMultiplier,
				GCD:      core.GCDDefault,
				CastTime: time.Millisecond*3500 - druid.TalentsBonuses.starlightWrathModifier,
			},

			ModifyCast: func(sim *core.Simulation, spell *core.Spell, cast *core.Cast) {
				druid.applyNaturesSwiftness(cast)
				druid.ApplyClearcasting(sim, spell, cast)
				druid.applySwiftStarfireBonus(sim, cast)
				if druid.HasActiveAura("Elune's Wrath") {
					cast.CastTime = 0
					druid.GetAura("Elune's Wrath").Deactivate(sim)
				}
			},
		},

		BonusCritRating: 0 +
			druid.TalentsBonuses.naturesMajestyBonusCrit +
			core.TernaryFloat64(druid.SetBonuses.balance_t6_2, 5*core.CritRatingPerCritChance, 0) + // T2-2P
			core.TernaryFloat64(druid.SetBonuses.balance_t7_4, 5*core.CritRatingPerCritChance, 0), // T7-4P
		DamageMultiplier: (1 + druid.TalentsBonuses.moonfuryMultiplier) *
			core.TernaryFloat64(druid.SetBonuses.balance_t9_4, 1.04, 1), // T9-4P
		CritMultiplier:   druid.SpellCritMultiplier(1, druid.TalentsBonuses.vengeanceModifier),
		ThreatMultiplier: 1,

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := bonusFlatDamage + sim.Roll(1038, 1222) + spellCoeff*spell.SpellPower()
			result := spell.CalcDamageMagicHitAndCrit(sim, target, baseDamage)
			if result.Landed() {
				if result.DidCrit() {
					hasMoonkinForm := core.TernaryFloat64(druid.Talents.MoonkinForm, 1, 0)
					druid.AddMana(sim, druid.MaxMana()*0.02*hasMoonkinForm, manaMetrics, true)
					if druid.SetBonuses.balance_t10_4 {
						if druid.LasherweaveDot.IsActive() {
							druid.LasherweaveDot.Refresh(sim)
						} else {
							druid.LasherweaveDot.Apply(sim)
						}
					}
				}
				if druid.HasMajorGlyph(proto.DruidMajorGlyph_GlyphOfStarfire) && druid.MoonfireDot.IsActive() {
					maxMoonfireTicks := druid.maxMoonfireTicks()
					if druid.MoonfireDot.NumberOfTicks < maxMoonfireTicks {
						druid.MoonfireDot.NumberOfTicks += 1
						druid.MoonfireDot.UpdateExpires(druid.MoonfireDot.ExpiresAt() + time.Second*3)
					}
				}
			}
			spell.DealDamage(sim, &result)
		},
	})
}
