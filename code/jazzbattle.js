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
    let PosDamage = Damage + (Damage * damageMod),
        NegDamage = Damage - (Damage * damageMod);
    PreOut.innerText = Math.round(Damage) + " (" + Damage + ")";;
    PosOut.innerText = Math.round(PosDamage) + " (" + PosDamage + ")";
    NegOut.innerText = Math.round(NegDamage) + " (" + NegDamage + ")";
}

function CalcDamage() {
    return attackStrength * AttackerOffense - Defense;
}