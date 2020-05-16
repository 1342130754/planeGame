class Bullet{
	constructor(x,y,img) {
	   this.x=x;
		this.y=y;
		this.img=img;
	this.speed=20;
	this.width=img.width/2;
	this.height=img.height/2;
	}
	//定义一个共同方法并传进ctx（游戏的画笔）
	draw(ctx){
		this.move()
			//绘制一个图2
		ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
	}
	move(){
		this.y=this.y-this.speed;
		//判断背景是否移出去
		if(this.y<0){
			var index=hero.bulletList.indexOf(this);
			hero.bulletList.splice(index,1);
		} 
	}
}
