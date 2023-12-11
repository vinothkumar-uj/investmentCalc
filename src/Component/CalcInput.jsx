export default function CalcInput({labelName,ipProp,entKey,exactData}) {
    return<p>
    <label htmlFor="">{labelName}</label>
    <input type="number" value={exactData[entKey]} onChange={(event)=>ipProp(entKey,event.target.value)}/>
</p>
}