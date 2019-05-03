import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'Nombre',
        type: 'string',
      }
      
     
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
