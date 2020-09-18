import { Component, OnInit, Renderer2, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'hiraola';
  products: any;
  menus: any;
  constructor(private renderer: Renderer2) {

  }
  ngOnInit() { 
    this.menus = [
      {name:'Home',childs:[{name :'Home1'},{name :'Home2'},{name :'Home3'}]},
      {name:'Shop',childs:[{name :'Shop1'},{name :'Shop2'},{name :'Shop3'}]},
      {name:'BLog',childs:[{name :'BLog1'},{name :'BLog2'},{name :'BLog3'}]},
      {name:'Pages',childs:[{name :'Pages1'},{name :'Pages2'},{name :'Pages3'}]},
      {name:'Contact',childs:[]},

    ];
    this.products = [
      {primary_img:'assets/images/product/medium-size/1-9.jpg',
       secondary_img:'assets/images/product/medium-size/1-8.jpg',
       product_name:'Flash Furniture Alonza Se...',
       price:90.36,
      },
      {primary_img:'assets/images/product/medium-size/1-7.jpg',
      secondary_img:'assets/images/product/medium-size/1-6.jpg',
      product_name:'Global Knives Profession...',
      price:23.12,
     },
     {primary_img:'assets/images/product/medium-size/1-5.jpg',
     secondary_img:'assets/images/product/medium-size/1-4.jpg',
     product_name:'Flash Furniture Alonza Se...',
     price:66.12,
    }
];

  }
  ngAfterViewInit() { 
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
  }
public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  
}
