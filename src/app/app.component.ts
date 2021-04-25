import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  convertedText = '';
  prettyJson = '';
  onJsonConvertClick(inputText: string): any {
    this.convertedText = JSON.parse(inputText);
    const jsonString: any = JSON.stringify(this.convertedText, null, 3);
    this.prettyJson = jsonString.replaceAll('\n', '\n \n');
  }
}
