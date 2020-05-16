/**
 * @description 游戏的背景对象
 * 使用js最新语法创建对象
 */
 class BackGround {
	//添加一个构造器，将3个参数传进来 
	//横坐标 纵坐标 image对象img
	constructor(x,y,img) {
	   this.x=x;
		this.y=y;
		this.img=img;
		this.speed=0.7;
	}
	//定义一个共同方法并传进ctx（游戏的画笔）
	draw(ctx){
		this.move();
		//绘制一个图片
		ctx.drawImage(this.img,this.x,this.y);
	}
	//背景移动的方法
	move(){
		this.y=this.y+this.speed;
		//判断背景是否移出去
		if(this.y>=0){
			this.y=-768;
		}
	}
}