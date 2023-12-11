// import { formatter } from "../formatter"
const formatter=new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR',
    minimumFractionDigits:0,
    maximumFractionDigits:0
})

export default function Result({initialInvest}) {
    let annualInvest=[]
    let initialInvestment=initialInvest.iniInvest
    let totalInt=0
    const duration=initialInvest.duration
    for(let i=0;i<duration;i++){
        let expectInt=initialInvestment*(initialInvest.expReturn/100)
        let totalInvestment=initialInvestment+expectInt
        totalInt+=expectInt
        initialInvestment+=initialInvest.annInvest
        annualInvest.push({
            year:i+1,
            actInv:formatter.format(initialInvestment),
            yearlyInt:formatter.format(expectInt),
            totInt:formatter.format(totalInt),
            totInvest:formatter.format(totalInvestment)
        })
    }
    return<table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Actual Invest.</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Total Invest.</th>
            </tr>
        </thead>
        <tbody>
            {annualInvest.map(yrlyInv=>(
                <tr key={yrlyInv.year}>
                    <td>{yrlyInv.year}</td>
                    <td>{yrlyInv.actInv}</td>
                    <td>{yrlyInv.yearlyInt}</td>
                    <td>{yrlyInv.totInt}</td>
                    <td>{yrlyInv.totInvest}</td>
                </tr>
            ))}
        </tbody>
    </table>
}
