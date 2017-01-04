import React from 'react';
import {BootstrapTable} from 'reactjs-bootstrap-table';

let data = [
   { id: 1, 'firstName': '...', lastName: '...', address: '...'},
   { id: 2, 'firstName': '...', lastName: '...', address: '...'}
]
let columns = [
  { name: 'firstName' },
  { name: 'lastName' },
  { name: 'address' }
]

export default () => (
  <BootstrapTable columns={columns} data={data} />
)