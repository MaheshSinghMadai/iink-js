import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as iink from 'iink-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit, OnDestroy {
  @ViewChild("tref", { read: ElementRef }) domEditor!: ElementRef;
  title = 'app';
  editor : any;
  
  ngAfterViewInit() : void {
     this.editor = iink.register(this.domEditor.nativeElement, {
      recognitionParams: {
        type: 'TEXT',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: 'bd475684-f71e-46ad-a092-0ffbbe9f81e3',
          hmacKey: 'bdb2532b-61cd-4e19-a8b2-5f5686940638',
        },
      }
    });
  };
  ngOnDestroy() : void {
      this.editor.close();
  }
}
