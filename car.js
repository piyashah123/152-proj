AFRAME.registerComponent("car", {
    schema: {
      moveY: {type: 'number', default:1},
    },
}
    tick: function () {
        this.data.moveY= this.data.moveY + 0.01;

        var pos = this.el.getAttribute("position");

        pos.y = this.data.moveY;
        
        this.el.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z});
    },
      update : function(){
        window.addEventListener("click",e => {
          this.data.clickCounter= this.data.clickCounter+1;
          if(this.data.clickCounter===1){
            const rotation = {x:0,y:20,z:0};
            this.el.setAttribute("rotation",rotation);
          }else if (this.data.clickCounter===2)
            {
              const rotation ={x:0 , y:100,z:0};
            }
          })
        })
         
      
   



