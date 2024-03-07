/// <reference path="./crud.d.ts" /> // Include type declarations from crud.d.ts

import { RowID, RowElement } from './interface'; // Import types
import * as CRUD from './crud'; // Imports CRUD functions defined in crud.js

const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

