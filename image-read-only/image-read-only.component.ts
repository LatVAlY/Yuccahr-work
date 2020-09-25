import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as ClassicEditor from 'ckeditor-ckeditor5-build-classic-mention';
import { ImageBlock } from 'src/app/models/message-editor/image-block';
import { ImagePreviewComponent } from 'src/app/shared/components/image-preview/image-preview.component';

@Component({
  selector: 'app-image-read-only',
  templateUrl: './image-read-only.component.html',
  styleUrls: ['./image-read-only.component.scss']
})
export class ImageReadOnlyComponent {

  @Input() block: ImageBlock;

  public editor = ClassicEditor;

  unfolded = true;
  constructor(private _dialog: MatDialog,) { }

  toggleImage() {
    this.unfolded = !this.unfolded;
  }

  openImg(imageSrc: string) {
    this._dialog.open(ImagePreviewComponent, {
      data: {
        imageSrc,
        block: this.block
      },
      width: '100vw',
      height: '100vh',
      maxWidth: 'unset',
      panelClass: 'image-full-size'
    });
  }
}
