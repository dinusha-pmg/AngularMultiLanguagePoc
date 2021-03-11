import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  langArray:string[] = ['en','si'];
  selectedLang:string ='en';
  ts:TranslateService;
  constructor(translateService:TranslateService)
  {
    translateService.addLangs(this.langArray);
    translateService.setDefaultLang('en');
    this.selectedLang = sessionStorage.getItem("language") as string
    translateService.use(this.selectedLang);
    this.ts = translateService;
  }

  ngOnInit():void
  {

  }

  onOptionsSelected(value:string){
    sessionStorage.setItem("language",value);
    location.reload();
}
  title = 'MultiLangPoc';
}
