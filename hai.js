let kiemtra=(n)=>{
	var tong=0;
	for(var i=1;i<n;i++){
		if(n%i==0)
			tong+=i;
	}
	if(tong==n)
		return true;
	else
		return false;
}
for(var i=1;i<=10000;++i)
	if(kiemtra(i))
		console.log(i);
