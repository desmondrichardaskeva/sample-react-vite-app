import React from 'react';
import Button from 'react-bootstrap/Button';


function Header({ cnt, setCnt }) {
    return (
        <div>
            <Button variant="success" onClick={() => setCnt((cnt) => cnt + 1)}>
                count is {cnt}
            </Button>
        </div>
    )
}
  
export default Header