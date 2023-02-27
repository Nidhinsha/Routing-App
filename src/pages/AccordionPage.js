import React from 'react';
import {GoBell} from 'react-icons/go'
import Button from './components/Button';
import Accordion from './components/Accordion';

function AccordionPage() {
  const items = [
    {
      id:'1',
      label:'hey how are you',
      content:"qqqqqqqqqqqqqqqqqqqqqqqq l qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
    },
    {
      id:'2',
      label:'jojoojjo',
      content:'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
    },
    {
      id:'3',
      label:'dsssdsdsdsdsdsdsssdddsdsddssdsdsdsddddsddsdsdsdsdddsdsdsdsdsddsd',
      content:'rrr'
    }
  ]
  return <Accordion items={items} />
}

export default AccordionPage;
