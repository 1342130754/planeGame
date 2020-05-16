class Hero {
	// 添加一个构造器，将三个参数传递进来
	constructor(x, y, img) {
		//将接收三个参数保存起来
		this.x = x;
		this.y = y;
		this.img = img;
		//图片的大小就是我们飞机的大小，所以在这里我们要指定飞机的大小
		this.width = img.width/2;
		this.height = img.height/2;
		//添加一个弹药箱的属性
		this.bulletList = [];
		this.buff=false;
	}
	//设置buff
	setBuff(){
		this.buff=true;
		this.img=resObj[1];
		//重新设置图片的高宽
		this.width = this.img.width;
		this.height =this.img.height;
	}
	//清除buff
	clearBuff(){
		this.buff=false;
		this.img=resObj[3]
		this.width = this.img.width;
		this.height =this.img.height;
	}
	//我把画笔ctx 给你，你自己来画，不用再交给外边去画了
	draw(ctx) {
		//在横坐标x，纵坐标y的地方去画一个图片img
		ctx.drawImage(this.img, this.x, this.y,this.width,this.height);

		//顺便于把弹匣里面的子弹也画出来，但是子弹放在弹匣里面，有多个所以要循环的去画
		for (var i = 0; i < this.bulletList.length; i++) {
			this.bulletList[i].draw(ctx);
		}
	}
	//编写一个方法，用于飞机发射子弹
	fire() {
		//子弹的发射方式有两种，第一种自动发射，第二种按键以后发射，按一次发一次
		//我们现在采用第一种方式
		//创建一个定时器
		var that = this;
		setInterval(function(){
			
			//判断是否有buff
			if(that.buff==true){
				var a = new Bullet(that.x, that.y, resObj[2]);
				var b = new Bullet(that.x, that.y, resObj[2]);
			
				a.x=a.x+that.width/4-a.width/2;
				b.x=b.x+that.width/4*3-b.width/2;
			
				that.bulletList.push(a);
				that.bulletList.push(b);
				
			}else{
				//实例化我们的子弹		this指代当前这个飞机的对象，所以飞机在哪里，子弹的初始坐标就在哪里
				var b = new Bullet(that.x, that.y, resObj[2]);
				b.x=b.x+that.width/2-b.width/2;
				//创建的子弹要放到我们的弹药箱里面去
				that.bulletList.push(b);
				//子弹创建好了以后，最终是要在屏幕上面显示出来的，也就是把自己画出来
				
				//在上面的这个定时器里面使用了`this`关键字，setInterval这里不能直接使用this
			}
		
		},200);
	}
}