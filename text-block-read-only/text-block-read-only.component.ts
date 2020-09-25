import { Component, Input } from '@angular/core';
import * as ClassicEditor from 'ckeditor-ckeditor5-build-classic-mention';
import { HtmlBlock } from 'src/app/models/message-editor/html-block';


@Component({
  selector: 'app-text-block-read-only',
  templateUrl: './text-block-read-only.component.html',
  styleUrls: ['./text-block-read-only.component.scss']
})
export class TextBlockReadOnlyComponent {

  @Input() block: HtmlBlock;
  @Input() addTopMargin: boolean;

  public editor = ClassicEditor;

}
