import { Component, OnInit } from '@angular/core';
import { remote, ipcRenderer } from 'electron';
const { dialog } = remote;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {
    const menu = remote.Menu.buildFromTemplate([{
      label: 'File',
      submenu: [{
          label: 'Openanother',
          click: () => {
            ipcRenderer.send('Opengoogle');
        }
      }]
    }]);
    remote.Menu.setApplicationMenu(menu);
  }

  ngOnInit() {

  }


}
