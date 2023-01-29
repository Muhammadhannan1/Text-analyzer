import React,{useState} from 'react'

export default function Textbox(props) {
    const btnupclick = () =>{
        // console.log('btnupclick was clicked')
        let uppertxt= text.toUpperCase()
        settext(uppertxt)
        props.showAlert('Converted to upper case', 'success')
    }
    const btnlowclick=() =>{
      let lowertext=text.toLowerCase()
      settext(lowertext)
      props.showAlert('Converted to lower case', 'success')

    }
    const btnclear=() =>{
      let cleartext=""
      settext(cleartext)
      props.showAlert('Text cleared', 'success')

    }
    const camelcase=(value)=>{
      let lowcase= value.toLowerCase()
      let lowcasesplit=lowcase.split(" ")
      for(let i=0;i<lowcasesplit.length;i++){
        lowcasesplit[i]=lowcasesplit[i].charAt(0).toUpperCase() + lowcasesplit[i].slice(1)
        
      }
      // const updatedtext = lowcasesplit.join(" ")
      return lowcasesplit.join(' ')
    }
    const btncamelcase = () =>{
      let newtext=camelcase(text)
      settext(newtext)
      props.showAlert('Converted to camel case', 'success')

    }
    const funconchange = (event) =>{
        //console.log('funonchange was triggerd')
        settext(event.target.value)
        // let eventt= Array.from(event.target.value)           To check the  value of event for understanding
        // let last= eventt.slice(-1)
        // console.log(last)
    }
    const [text, settext] = useState('')
  return (
      <>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'} }>
          <h1>{props.heading} </h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" value ={text} style= {{backgroundColor:props.mode==='dark'?'#626262':'white',color:props.mode==='dark'?'white':'black'}}onChange={funconchange}rows="8"></textarea>
        
        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'? 'green':'#0d6efd',borderColor:props.mode==='dark'?'green':'#0d6efd'}}onClick={btnupclick}>Convert to uppercase</button>

        <button className="btn btn-primary" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'? 'green':'#0d6efd',borderColor:props.mode==='dark'?'green':'#0d6efd'}}onClick={btnlowclick}>Convert to lowercase</button>

        <button className="btn btn-primary my-3 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'? 'green':'#0d6efd',borderColor:props.mode==='dark'?'green':'#0d6efd'}} onClick={btnclear}>Clear text</button>

        <button className="btn btn-primary my-2 mx-2" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'? 'green':'#0d6efd',borderColor:props.mode==='dark'?'green':'#0d6efd'}} onClick={btncamelcase}>Convert to camel case</button>


      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h3>Your text summary</h3>
        <p>{text.split(' ').filter((element)=>{return element.length>0}).length} words and {text.length} characters</p>
        <p>{text.split(' ').filter((element)=>{return element.length>0}).length*0.008} minutes to read the above text</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text above to preview here'}</p>
      </div>
      </>
    )
}