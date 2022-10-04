import {Component, NgModule, ViewEncapsulation} from '@angular/core';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-button-scene',
  templateUrl: './button-scene.html',
  styleUrls: ['./button-scene.scss']
})
export class ButtonScene {
}

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ButtonScene],
  declarations: [ButtonScene]
})
export class ButtonSceneModule {
}

