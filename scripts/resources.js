var Rcs =
{
	paths: [],
	images: [],
	loaded: 0,

	init_paths: function()
	{
		for (var i = 0; i < 100; ++i)
		{
			this.paths[i] = "http://fakeimg.pl/32x32/?text=" + i;
		}
	},

	load: function(end_callback, tick_callback)
	{
		var self = this;
		for (var i = 0; i < this.paths.length; ++i)
		{
			this.images[i] = new Image();
			this.images[i].onload = function()
			{
				++self.loaded;
				if (tick_callback)
					tick_callback(self.loaded * 100 / self.paths.length);
				if (self.loaded == self.paths.length)
					end_callback();
			}
			this.images[i].src = this.paths[i];
		}
	}
}