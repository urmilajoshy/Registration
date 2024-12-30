
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateField } from '@mui/x-date-pickers/DateField';








function App() {
  const [invalidFname,setInvalidFname] = useState(false)
  const [invalidLname,setInvalidLname] = useState(false)
  const [invalidAddress,setInvalidAddress] = useState(false)
  const [invalidContact,setInvalidContact]= useState(false)
  const[invalidEmail,setInvalidEmail] = useState(false)
  const [invalidDob,setInvalidDob] = useState(false)
  const [invalidCourse,setInvalidCourse] = useState(false)

  const [fname,setFname] = useState(0)
  const [lname,setLname] = useState(0)
  const [address,setAddress] = useState(0)
  const [contact,setContact] = useState(0)
  const [gender,setGender] = useState(0)
  const [email,setEmail] = useState(0)
  const [dob,setDob] = useState(0)
  const [course,setCourse] = useState(0)

  const validateInputs =(inputTag)=>{
    // console.log(inputTag);
    const {name,value} = inputTag
    // console.log(name,value);
    // console.log(!!value.match(/^[a-zA-Z\s-]+$/));
    if(name=='fname'){
        setFname(value)
        if(!!value.match(/^[a-zA-Z\s-]+$/)){
          setInvalidFname(false)
        }
        else{
          setInvalidFname(true)
        }
    }  else if(name=='lname'){
      
        setLname(value)
        if(!!value.match(/^[a-zA-Z\s-]+$/)){
          setInvalidLname(false)
        }
        else{
          setInvalidLname(true)
        }
    }else if(name=='address'){
      
      setAddress(value)
      if(!!value.match(/^[a-zA-Z\s-]+$/)){
        setInvalidAddress(false)
      }
      else{
        setInvalidAddress(true)
      }
  }
   
  }
  const validateData =(input)=>{
    // console.log(inputTag);
    const {name,value} = input
    if(name=='contact'){
      setContact(value)
      if(!!value.match(/^\d+$/)){
        setInvalidContact(false)
      }
      else{
        setInvalidContact(true)
      }
      
    }
    else if(name=='email'){
      setEmail(value)
    if(!!value.match(/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/)){
      setInvalidEmail(false)
    }
    else{
      setInvalidEmail(true)
    }
    }
    else if(name=='dob')
    {
      setDob(value)
      if(!!value.match(/^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/)){
        setInvalidDob(false)
      }
      else{
        setInvalidDob(true)
      }
    }
    else if(name=='mySelect')
    {
      setCourse(value)
      if(!!value.match(" ")){
        setInvalidCourse(false)
      }
      else{
        setInvalidCourse(true)
      }
    }
  

  }

  const dispalyData =(e)=>{
    e.preventDefault()
    if(fname && lname && address && contact && email && dob && course ){
      alert((fname,lname,address))
    }
    else{
      alert("Please fill tthe form completely")
    }
    
  }
   const handleReset = ()=>{
    setFname(0)
    setLname(0)
    setAddress(0)
    setContact(0)
    setEmail(0)
    setAddress(0)
    setGender(0)
    setCourse(0)
    setDob(0)
    setInvalidAddress(false)
    setInvalidContact(false)
    setInvalidCourse(false)
    setInvalidDob(false)
    setInvalidEmail(false)
    setInvalidLname(false)
    setInvalidLname(false)
    setInvalidDob(false)
   }
  return (
    <>
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align items-center bg-dark'>
      <div style={{width:'600px ',minHeight:'70vh'}}className='bg-light rounded p-3'>
      <h1 style={{color:'black'}}>HIGHER SECONDARY REGISTRATION</h1>
      <form className='mt-5'>
        <div className='mb-3'>
       <TextField value={fname ||""} name='fname' onChange={(e)=>validateInputs(e.target)} style={{width:'100%'}} id="outlined-fname" label="FIRST NAME" variant="outlined" />
        
        </div>
        {/* invalid fname */}
       {invalidFname &&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Data!!!!
        </div>}
        <div className='mb-3'>
        <TextField value={lname ||""} name='lname' onChange={(e)=>validateInputs(e.target)} style={{width:'100%'}} id="outlined-lname" label="LAST NAME" variant="outlined" />
        </div>
         {/* invalid Lname */}
       {invalidLname &&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Data!!!!!
        </div>}
        <div className='mb-3'>
        <TextField value={address ||""} onChange={(e)=>validateInputs(e.target)} name='address' className='w-100' id="outlined-address" label="ADDRESS" variant="outlined" />
        </div>
         {/* invalid Address */}
       {invalidAddress &&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Data!!!!
        </div>}
       
        <div className='mb-3'>
       <TextField value={contact ||""} onChange={(e)=>validateData(e.target)} name='contact' style={{width:'100%'}} id="outlined-contact" label="CONTACT NO." variant="outlined" />
       </div>
        {/* invalid Address */}
       {invalidContact &&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Data!!!!
        </div>}
        
        <div className='mb-3'>
        <TextField value={email ||""} onChange={(e)=>validateData(e.target)} name='email' style={{width:'100%'}} id="outlined-email" label="Email" variant="outlined" />
        </div>
        {/* invalid Address */}
       {invalidEmail &&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Data!!!!
        </div>}
        <div className='d-flex justify-content-between'name='gender'value={gender ||""}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{color:'black'}}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>

    <TextField name='dob' value={dob ||""} onChange={(e)=>validateData(e.target)} style={{width:'250px'}} id="outlined-email" label="Date-of-Birth" variant="outlined" />
    {/* invalid Address */}
    {invalidDob &&  <div className='mb-3 text-danger fw-bolder'>
          Invalid Date!!!!
        </div>}
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField label="Basic date field" />
      </DemoContainer>
    </LocalizationProvider> */}
   
        </div>
        <div className='mb-3 w-100'>
        <InputLabel id="demo-simple-select-label" style={{color:'black'}} variant="outlined">COURSE</InputLabel>
       
        <Select label="Select Course" className='w-100 mt-3'name='mySelect'class="required" onChange={(e)=>validateData(e.target)} value={course ||""}>
          <MenuItem value={0} selected disabled>Select Course</MenuItem>
          <MenuItem value={1}>COMPUTER SCIENCE</MenuItem>
          <MenuItem value={2}>BIO MATHS</MenuItem>
          <MenuItem value={3}>HUMANITIES</MenuItem>
          <MenuItem value={4}>COMMERCE</MenuItem>
        </Select>
        </div>
                {/* invalid Course */}
       {invalidCourse &&  <div className='mb-3 text-danger fw-bolder'>
          Select a course
        </div>}
        {/* <div className='d-flex mt-6 mb-3 justify-content-between'>
        <Button variant="cancel" style={{backgroundColor:'red',width:'200px', marginLeft:'50px',color:'white'}}>CANCEL</Button>
        <Button variant="register" style={{backgroundColor:'green',width:'200px', marginRight:'50px',color:'white'}}>REGISTER</Button>

</div> */}
<Stack direction="row" spacing={2}>
<Button onClick={handleReset} variant="outlined" style={{backgroundColor:'red',width:'200px',height:'70px', marginLeft:'70px',color:'white'}}>CANCEL</Button>
      <Button type='submit' disabled={invalidFname || invalidLname || invalidAddress || invalidContact || invalidDob || invalidEmail} onClick={dispalyData} variant="outlined" style={{backgroundColor:'green',width:'200px',height:'70px' ,color:'white'}}>REGISTER</Button>

  
</Stack>

      </form>

      </div>

    </div>
     
    </>
  )
}

export default App
