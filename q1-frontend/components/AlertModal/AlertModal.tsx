import { SetStateAction, Dispatch, FormEvent, useState } from "react";
import { TableContents } from "../Table/Table";
import Table from "../Table/Table";



interface AlertModalProps {
  useContents: Dispatch<SetStateAction<TableContents>>,
 
  
}



export default function AlertModal({useContents}: AlertModalProps) {
  function onSubmitEvent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // hint: the alert given is at (e.target as any).elements[0].value - ignore typescript being annoying
    console.log((e.target as any).elements[0].value);
  
    
       
    // Use the setter function to update the state of the table
    useContents({
      columnTitles: ['Alert', 'Status', 'Updates'],
      rowContents: [
        
      {
        alert:  (e.target as any).elements[0].value,
        status: '',
        updates: []
      },
      {
        alert: 'food',
        status: 'good!',
        updates: []
      },
      {
        alert: 'water',
        status: 'low',
        updates: [{ update: 'dropped to 10% below normal', date: '11/11/2022' }]
      },
      {
        alert: 'shelter',
        status: 'terrible :(',
        updates: [{ update: 'slept on cold ground', date: '11/11/2022' }, { update: 'slept on hard concrete', date: '13/11/2022' }]
      },
      {
        alert: 'Done!',
        status: 'mannarora5',
        updates: []
      }
    ]

    })
      
    
    
  }

  
  
  return (
    <form data-testid='form' onSubmit={onSubmitEvent}>
      <label> Add new alert: </label>
      <input type='text' id='alert' name='alert' />
      <button type='submit'> Add </button>
    </form>
  )
}
