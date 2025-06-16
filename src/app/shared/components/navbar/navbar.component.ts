import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');


}

changeLang(lang: string) {
  this.translate.use(lang);
}

}
