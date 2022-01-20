function SelectLink(menu,selector){
	this.menu = menu;
	this.selector = selector;	
}
function wizz(level, pos)
{   
	var obj = objs[pos];
	
	if( level == 0 )
		a = obj.menu;
	else
	{
		a = obj.menu;
		for( i=0; i<level; i++ ){
			a = a[(document.all[obj.selector[i]].selectedIndex * 5 + 4)];
		}
	}
	if( a == null ) return;
	s = document.all[obj.selector[level]];
	i = s.length;
	while( i > 0 ) s.options[--i] = null;
	while( i < Math.floor(a.length/5) ){
		
		s.options[i] = new Option( a[i*5], a[i*5+1]);
		if (a[i*5+2])
			s.options[i].defaultselected=true;
		if (a[i*5+3])
			s.options[i].selected=true;
		i=i+1;
	}
	s.onchange = Function("wizz(" + (level+1) + ","+pos+")");
	
	wizz(level+1,pos);
}
