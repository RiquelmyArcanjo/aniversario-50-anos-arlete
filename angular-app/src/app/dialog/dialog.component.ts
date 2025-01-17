import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSnackBarModule, MatDialogModule]
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

  triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  closeDialog() {
    this.triggerConfetti();
    this.dialogRef.close();
    this.snackBar.open('Se deu tudo certo em seu banco, tenho certeza que o presente chegou em tempo recorde! Obrigado, a Arlete irá amar 🎉🥳', '', {
      duration: 11000,
    });
  }
}