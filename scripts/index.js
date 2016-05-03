var progress_span = document.getElementById("progress_span");

var scene = document.getElementById("scene");
var ctx = scene.getContext("2d");

Rcs.init_paths();
Rcs.load(load_end, load_tick);

function load_end()
{
	document.getElementById("loading_div").style.display = "none";
	for (var i = 0; i < Rcs.images.length; ++i)
		ctx.drawImage(Rcs.images[i], i % 10 * 32, Math.floor(i / 10) * 32);
}

function load_tick(progression)
{
	var val = Math.floor(progression * 1000) / 1000;
	progress_span.innerHTML = val;
	progress_bar.style.width = val + "%";
}
