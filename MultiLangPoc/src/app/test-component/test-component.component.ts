import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

   message:string='test message before translate';
  constructor(
    private translate:TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get(['TestMessage']).subscribe(translations=>{
      this.message = translations['TestMessage'];
    });
  }

}
