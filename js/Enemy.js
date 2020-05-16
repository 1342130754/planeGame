
class Enemy {
	//添加一个构造器，将3个参数传进来 
	//横坐标 纵坐标 image对象img
	constructor() {
		//横坐标随机
	   this.x=parseInt(Math.random()*512);
		this.y=0;
		//两张敌机图片 分不同概率出现
		var temp=parseInt(Math.random()*100);
		if(temp>90){
			this.img=resObj[5];
			this.speed=1+parseInt(Math.random()*4);;
			this.life=5;
			this.score=10;//得分
		}else{
			this.img=resObj[4];
			this.speed=1.5+parseInt(Math.random()*3);
			this.life=2;
			this.score=5;
		}
		this.width=this.img.width/2;
		this.height=this.img.height/2;
		if(this.x>512-this.width){
			this.x=512-this.width;
		}
	}
	
	//定义一个共同方法并传进ctx（游戏的画笔）
	draw(ctx){
		this.move();
		//绘制一个图片
		ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
	}
	//背景移动的方法
	move(){
		this.y=this.y+this.speed;
		//判断背景是否移出去
		if(this.y>=768){
			var index=enemyList.indexOf(this);
			enemyList.splice(index,1);
		}
	}
	isDie(){
		if(this.life<=0){
			//说明飞机已经死亡
			//1.移除自己
			var index=enemyList.indexOf(this);
			enemyList.splice(index,1);
			//2.添加爆炸动画
			var boom=new Boom(this.x+this.width/2,this.y+this.height/2);
			boomList.push(boom);
			//3.播放爆炸的音乐
			/* var audio=document.createElement("audio");
			audio.src="../sounds/use_bomb.mp3";
			audio.play(); */
			document.getElementById("boom").play();
			//4.统计得分
			score+=this.score;
			//5.设置buff
			if(hero!=null&&score>=50){
				hero.setBuff();
			}
		}
	}
	
}