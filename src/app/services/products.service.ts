import { Injectable } from '@angular/core';
import { Products } from '../Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
    console.log("Service Initialized");
    
   }

  product: Products[] = [
    { id: 1, p_name: "Item 1 ", p_desc: "lorem_newwwdwddefdfff-sdfsd-fsdf-sdfs-dfs-dfs-dfsd-fs-d" },
    { id: 2, p_name: "Item 2 ", p_desc: "lorem_newwwdwddefdfff-sdfsd-fsdf-sdfs-dfs-dfs-dfsd-fs-d" },
    { id: 3, p_name: "Item 3 ", p_desc: "lorem_newwwdwddefdfff-sdfsd-fsdf-sdfs-dfs-dfs-dfsd-fs-d" },
    { id: 4, p_name: "Item 4 ", p_desc: "lorem_newwwdwddefdfff-sdfsd-fsdf-sdfs-dfs-dfs-dfsd-fs-d" },
    { id: 5, p_name: "Item 5 ", p_desc: "lorem_newwwdwddefdfff-sdfsd-fsdf-sdfs-dfs-dfs-dfsd-fs-d" },
  ]

  
}
