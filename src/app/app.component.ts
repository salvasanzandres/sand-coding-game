import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public board: number[][];
    public maxSandGrain = 4;
    public boardSize = 7;

    constructor() {
        this.generateBoard();
    }

    play(table: number[][], n: number) {
        const centerPosition = Math.floor(table.length / 2);

        for (let i = 0; i < n; i++) {
            this.addGrainOfSand(table, centerPosition, centerPosition);
        }
    }

    private addGrainOfSand(board: number[][], positionX: number, positionY: number) {
        if (board[positionX][positionY] !== undefined) {
            board[positionX][positionY]++;
            if (board[positionX][positionY] === this.maxSandGrain) {
                board[positionX][positionY] = 0;
                this.addGrainOfSand(board, positionX, positionY - 1);
                this.addGrainOfSand(board, positionX - 1, positionY);
                this.addGrainOfSand(board, positionX + 1, positionY);
                this.addGrainOfSand(board, positionX, positionY + 1);
            }
        }
        return true;
    }

    private generateBoard() {
        this.board = [];
        for (let x = 0; x < this.boardSize; x++) {
            this.board[x] = [];
            for (let y = 0; y < this.boardSize; y++) {
                this.board[x][y] = Math.floor(Math.random() * 3);
            }
        }
    }
}


