import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const Search = () =>
  (<div>
    <form>
      <FormGroup>
        <FormControl type="text" placeholder="Enter city or zip" />
      </FormGroup>
    </form>
  </div>);

export default Search;
