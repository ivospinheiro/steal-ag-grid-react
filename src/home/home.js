import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './home.less';
import view from './home.stache';

import React from 'react';
import ReactDOM from 'react-dom';

import { AgGridReact } from 'ag-grid-react';


export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the my-home component'
  }
});

export default Component.extend({
  tag: 'my-home',
  ViewModel,
  view,
  events: {
    "inserted": function(){
      const  columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
      ],
      rowData = [
          {make: "Toyota", model: "Celica", price: 35000},
          {make: "Ford", model: "Mondeo", price: 32000},
          {make: "Porsche", model: "Boxter", price: 72000}
      ];

      ReactDOM.render(<AgGridReact columnDefs={columnDefs} rowData={rowData} enableSorting={true}/>, document.getElementById("tableId"));
    }
  }
});
