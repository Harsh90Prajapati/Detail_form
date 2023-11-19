import React from 'react'
import Card from './Card'

const LeftCard = () => {
  return (
    <div className='col-span-2 bg-white px-12 py-4'>
        <Card title='New Form' desc='Start creating a new form with the wide options of fields available' />
        <p className='py-8'>Explore the following Templates:</p>
        
        <div className='space-y-5'>
        <Card title='Details Collection' desc='Collect information from Candidates on their education, work experience, contact no,etc' />
        <Card title='Document Collection' desc='Save time and efforts: Explore this template to find a set of questions required for document collection ' />
        <Card title='Statement of Purpose' desc='Start creating a new form with the wide options of fields available' />
        <Card title='Interview Availability' desc='Start creating a new form with the wide options of fields available' />
        </div>
    </div>
  )
}

export default LeftCard