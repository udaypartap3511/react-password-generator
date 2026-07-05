import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef= useRef(null)

  const PasswordGenerator = useCallback(()=>{
   let pass= ""
   let str= "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

  if(numberAllowed) str+="0123456789";
  if(charAllowed)  str+="!@#$%^&*_+-={}~`"

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass += str[char];
  }

  setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
   window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-8 text-[#34A99D] bg-[#06202B] font-medium">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow  rounded-lg overflow-hidden 
      mb-4">
        <input 
        type="text"
        value={password}
        className='outline-none w-full bg-white py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-[#FF9D23] text-white
        px-3 py-0.5 shrink-0 cursor-pointer hover:bg-[#869B7E]'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} 
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} 
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setcharAllowed((prev)=> !prev)
          }} 
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
