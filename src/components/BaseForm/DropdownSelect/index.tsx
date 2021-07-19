import  {  useState } from 'react'
type Props={
    dataList:any
}
const Dropdown = (props:Props) =>{
    const {dataList} =props
    const [selectedOption, setSelectedOption] = useState(dataList[0])
    
    const onChange = (e: any) => {
        setSelectedOption({  value: e.target.value });
      };
    return(
        dataList.map((option:any)=>{
            return(
                <select value={selectedOption} onChange={onChange}>
                    <option value={selectedOption} >{option}</option>
                </select>
            )
        }) 
    )
}
export default Dropdown