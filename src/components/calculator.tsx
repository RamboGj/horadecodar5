import { Component, useState } from 'react'
import Divide from '../assets/Divide.svg'

export default function Calculator () {
  const [result, setResult] = useState<string>('')
  const [numbersForOperation, setNumbersForOperation] = useState<string[]>([])
  const [operations, setOperations] = useState<string[]>([])

  const [currentNumber, setCurrentNumber] = useState<string[]>([])

  console.log(currentNumber)

  const numbers = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
  ]

  function storePreviousNumber(number: string) {
    setNumbersForOperation([number])
    setCurrentNumber([])
  }

  function calculate(value1: string, value2: string, operation: string) {
    switch(operation) {
      case '+': {
        const result = Number(value1.replace(',', '')) + Number(value2.replace(',', ''))
        setResult(String(result))
        break
      }
      case '-': {
        const result = Number(value1.replace(',', '')) - Number(value2.replace(',', ''))
        setResult(String(result))
        break
      }
      case '/': {
        const result = Number(value1.replace(',', '')) / Number(value2.replace(',', ''))
        setResult(String(result))
        break
      }
      case '*': {
        const result = Number(value1.replace(',', '')) * Number(value2.replace(',', ''))
        setResult(String(result))
        break
      }
    }
  }

  function clearMemory() {
    setResult('0')
    setNumbersForOperation([])
    setOperations([])
    setCurrentNumber([])
  }

    return (
        
      <div className='bg-dark-blue rounded-3xl h-[32rem] w-80 box hover:shadow-2xl border-black border-2 font-last-calc'>
        <div className="font-last-calc text-xl text-right mx-4 mt-4 text-slate-800 text">
          1 + 1
        </div>
        <div className="flex flex-col">
          <span className="font-last-calc text-3xl mx-4 text-slate-700">=</span>
          <div className="self-end font-last-calc text-4xl mx-4 ">{currentNumber}</div>
          <div className="self-end font-last-calc text-4xl mx-4 ">{result}</div>
        </div>
        <div className="max-w-[320px] mt-[4rem] mx-5">
          <div className='grid grid-cols-4 w-full gap-3'>
            <button onClick={clearMemory} className="rounded-full w-[60px] h-[60px] bg-yellow-700 shadow-button font-last-calc col-span-1" >CE</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc col-span-1">C</button>
            <button 
              onClick={() => {
                setOperations(['+'])
                storePreviousNumber(currentNumber.toString())}
              } 
              className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc col-span-1">
              +
            </button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue-200 shadow-button flex flex-wrap justify-center col-span-1 content-center bottom-8 "><img src={Divide} /></button>
          </div>
          <div className='grid grid-cols-4 w-full gap-3 mt-3'>
            <div className='grid col-span-3 grid-cols-3 w-full gap-3'>
              {numbers.map((number) => {
                return (
                  <button 
                    onClick={() => setCurrentNumber((prev) => [...prev, number.label])}
                    id={String(number.value)}
                    className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc col-span-1"
                  >
                    {number.label}
                  </button>
                )
              })}            
            </div>
            <div className='col-span-1 space-y-3'>
              <button className="rounded-full w-[60px] h-[60px] bg-dark-blue-200 shadow-button font-last-calc">-</button>
              <button className="rounded-full w-[60px] h-[60px] bg-dark-blue-200 shadow-button font-last-calc">X</button>
              <button 
                className="rounded-full w-[60px] h-[60px] bg-result-button shadow-button font-last-calc" 
                id='calculateButton' 
                onClick={() => calculate(numbersForOperation[0].toString(), currentNumber.toString(), operations[0])}>
                  =
              </button>
            </div>
          </div>
            
            
        </div>
      </div>
       
    
    )
}