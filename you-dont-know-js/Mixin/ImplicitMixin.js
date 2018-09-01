var Something = {
	cool: function() {
		this.greeting = "Hello World";
		this.count = this.count ? this.count + 1 : 1;
	}
};

Something.cool();
Something.greeting;
Something.count; 

var Another = {
	cool: function() {
		Something.cool.call( this );
	}
};

Another.cool();
Another.greeting;
Another.count;