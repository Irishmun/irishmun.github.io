let AttackerOffense, Defense, attackStrength
const damageMod = 0.25;

function CalculateAttack() {
    let PreOut = document.getElementById("PreOutput");
    let PosOut = document.getElementById("PosOutput");
    let NegOut = document.getElementById("NegOutput");

    AttackerOffense = parseInt(document.getElementById("Off").value);
    Defense = parseInt(document.getElementById("Def").value);
    attackStrength = parseInt(document.getElementById("AType").value);

    let Damage = CalcDamage();
    let PosDamage = Damage * 1.25,
        NegDamage = Damage * 0.75;
    let RDamage = Math.round(Damage),
        RPosDamage = Math.round(PosDamage),
        RNegDamage = Math.round(NegDamage);
    if (Damage < 0) { RDamage = 0; }
    if (PosDamage < 0) { RPosDamage = 0; }
    if (NegDamage < 0) { RNegDamage = 0; }

    PreOut.innerText = RDamage + " (" + Damage + ")";;
    PosOut.innerText = RPosDamage + " (" + PosDamage + ")";
    NegOut.innerText = RNegDamage + " (" + NegDamage + ")";
}

function CalcDamage() {
    return attackStrength * AttackerOffense - Defense;
}