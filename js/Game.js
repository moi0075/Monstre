export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
    }

   async init(canvas) {
        this.ctx = this.canvas.getContext("2d");

        console.log("Game initialisé");
    }

    start() {
        console.log("Game démarré");
        // dessine le monstre (le joueur)
        this.drawMonstre(150, 150);
    }


    drawMonstre(x, y) {
        this.ctx.save();
        //dessien un cercle noir
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(x, y, 50, 0, Math.PI * 2);
        this.ctx.fill();
        //dessine les yeux
        this.ctx.fillStyle = "white";
        this.ctx.beginPath();
        this.ctx.arc(x - 10, y - 5, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x + 10, y - 5, 5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x, y-15, 5, 0, Math.PI * 2);
        this.ctx.fill();
        //dessine les pupilles
        this.ctx.fillStyle = "red";
        this.ctx.beginPath();
        this.ctx.arc(x - 10, y - 5, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x + 10, y - 5, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x, y - 15, 2, 0, Math.PI * 2);
        this.ctx.fill();
    
        //Dessiner la bouche
        this.ctx.strokeStyle = "brown"; 
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(x-20, y+20, 10, 0, Math.PI * 1); 
        this.ctx.stroke();   
        this.ctx.strokeStyle = "brown"; 
        this.ctx.beginPath();
        this.ctx.arc(x+20, y+20, 10, 0, Math.PI * 1); 
        this.ctx.stroke(); 

        this.ctx.strokeStyle = "yellow"; 
        this.ctx.beginPath();
        this.ctx.arc(x-0, y+20, 10, 0, Math.PI * 2,true); 
        this.ctx.stroke();    
        
        this.ctx.restore();
    }

}