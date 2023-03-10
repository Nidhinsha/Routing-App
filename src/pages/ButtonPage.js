import React from 'react';
import {GoBell} from 'react-icons/go'
import Button from '../components/Button';

function ButtonPage() {
  const handleClick = () =>{}
  return (
    <div>
      <h1>hello</h1>
      <div>
        <Button success rounded outline onClick={handleClick} className='mb-5'>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
