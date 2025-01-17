import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule]
})
export class DialogComponent {
  constructor(private snackBar: MatSnackBar, public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { value: string }
  ) {}

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.snackBar.open('Chave PIX copiada. O presente está quase pronto... 🎁🎉🥳', 'Fechar', {
        duration: 8000,
      });
    }, (err) => {
      console.error('Erro ao copiar o texto: ', err);
    });
  }
}