import CalcInput from "./CalcInput"

export default function InvestCalc({currEntries,changingEntries}) {
    
    return<section id="user-input">
    <div className="input-group">
    <CalcInput labelName="Initial Investment" exactData={currEntries} entKey="iniInvest" ipProp={changingEntries}/>
    <CalcInput labelName="Annual Investment" exactData={currEntries} entKey="annInvest" ipProp={changingEntries}/>
    </div>
    <div className="input-group">
    <CalcInput labelName="Expected Return" exactData={currEntries} entKey="expReturn" ipProp={changingEntries}/>
    <CalcInput labelName="Duration" exactData={currEntries} entKey="duration" ipProp={changingEntries}/>
    </div>
    </section>
}