import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
         "name": "A 4 Paper",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "Rs  170.00  Century "
       },
       {
         "name": "Fax Roll",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "Rs  130.00 Kores "
       },
       {
         "name": "CD Blank",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "Rs 10.00 Sony"
       },
       {
         "name": "Computer Paper - 15x12x2",
         "profilePic": "assets/img/speakers/lion.jpg",
         "about": "Rs 650.00 Kores"
       }
     ];

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
