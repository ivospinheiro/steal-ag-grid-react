import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'steal-ag-grid-react/models/test';

import 'steal-ag-grid-react/home/home-test';

F.attach(QUnit);

QUnit.module('steal-ag-grid-react functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('steal-ag-grid-react main page shows up', function() {
  F('title').text('steal-ag-grid-react', 'Title is set');
});
