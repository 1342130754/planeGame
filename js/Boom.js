
class Boom{
	constructor(x,y) {
		this.x=x;
		this.y=y;
		this.img=resObj[6];
		//先将图片宽高设置为0
		this.height=0;
		this.width=0;
	}
	
	draw(ctx){
		this.height=this.height+2;
		this.width=this.width+2;
		this.x=this.x-1;
		this.y=this.y-1;
		ctx.drawImage(this.img, this.x, this.y,this.width,this.height);
		
		if(this.width>=this.img.width||this.height>=this.img.height){
			var index=boomList.indexOf(this);
			boomList.splice(index,1);
		}
	}
}