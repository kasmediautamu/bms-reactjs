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
    // const RenderDropDown=()=>{
    //     return (
    //         dataList.map((option:any)=><option value={selectedOption} onChange={onChange}>{option}</option>
    //             )
    //     )
    // }
    const RenderOptions = dataList.map((option:any)=><option>{option}</option>)
    return(
       <select name="" id="">
           {RenderOptions}
       </select>  
    )
}
export default Dropdown