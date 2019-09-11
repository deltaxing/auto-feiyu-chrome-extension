
 async function Main(){
	var username = await new Promise((resolve,reject)=>{
        chrome.storage.sync.get(['key'], function(result) {
			console.log('Value currently is ' + result.key);
			resolve(result.key);
		  });
	});

	console.log('username is' + username);

	document.querySelector('input').value = "hellow";
	var socket = io('https://feiyu.gocoxing.cn');
	socket.on('connect', ()=>{
		//document.querySelector('input').value = "connected";
		socket.emit('join', username, (data) => {
			console.log(data); // data will be 'woot'
		});
	});
	socket.on('message',(msg)=>{
		console.log(msg);
		document.querySelector('#kw').value = msg;
	});
}

Main().then();
