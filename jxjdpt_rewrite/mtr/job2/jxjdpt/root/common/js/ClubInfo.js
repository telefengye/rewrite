//名称：成员组选择JavaScript类
//制作：张华
//日期：2002年8月8号
function ClubInfo()
{
  this.rNum=0;
  this.pNum=0;
  Roles=new Array();
  Person=new Array();  
  this.SetForm=SetForm;
  this.AddRole=AddRole;
  this.AddPerson=AddPerson;    
  this.DispRoles=DispRoles;
  this.DispRolesClub=DispRolesClub;
  this.MoveSelect=MoveSelect;
  this.MoveSelectIn=MoveSelectIn;
  this.MoveSelectOut=MoveSelectOut;
  this.MoveAll=MoveAll;
  this.MoveAllIn=MoveAllIn;
  this.MoveAllOut=MoveAllOut;
  this.GetSelectValue=GetSelectValue;
}
function SetForm(RoleForm,PersonForm,SelectPersonForm)
{
  this.fRole=RoleForm;
  this.fPerson=PersonForm;
  this.fSelect=SelectPersonForm;
}
function RoleInfo(id,name)
{
  this.id=id;
  this.name=name;
}
function PersonInfo(id,name,role)
{
  this.id=id;
  this.name=name;
  this.role=role;
}
function AddRole(RoleID,RoleName)
{
  Roles[this.rNum]=new RoleInfo(RoleID,RoleName);
  this.rNum++;
}
function AddPerson(PersonID,PersonName,Role)
{
  Person[this.pNum]=new PersonInfo(PersonID,PersonName,Role);
  this.pNum++;
}
function DispRoles()
{
  var i,iNum;
  iNum=Roles.length;
  for(i=0;i<iNum;i++)
  {
    this.fRole.options[i+1] = new Option(Roles[i].name,Roles[i].id);
  }  
}
function DispRolesClub()
{
  var i,j,iNum,RoleID;
  RoleID=this.fRole.options[this.fRole.selectedIndex].value;
  iNum=Person.length;
  j=0;
  this.fPerson.options.length=0;
  for(i=0;i<iNum;i++)
  {
    if(Person[i].role==RoleID)
    {
      this.fPerson.options[j]=new Option(Person[i].name,Person[i].id);
      j++;      
    }
  }
}
function MoveSelect(from,to)
{
  var i,iNum,iCount;
  iNum=from.options.length;
  iCount=to.options.length;
  var flag=0;
  for(i=0;i<iNum;i++)
  {
	flag=0;
    if(from.options[i].selected)
    {  
	  for (var j=0; j<iCount;j++ )
	  {
		  if (to.options[j].value==from.options[i].value)
		  {
			  flag=1;
			  break;
		  }
	  }
	  if (flag==0)
	  {
		  to.options[iCount++]=new Option(from.options[i].text,from.options[i].value);
		  from.options[i]=null;
		  i--;iNum--;  
	  }
    }
  }
}
function MoveAll(from,to)
{
  var i,iNum,iCount;
  iNum=from.options.length;
  iCount=to.options.length;
  var flag=0;
  for(i=0;i<iNum;i++)
  {
	  flag=0;
	  for (var j=0; j<iCount;j++ )
	  {
		  if (to.options[j].value==from.options[i].value)
		  {
			  flag=1;
			  break;
		  }
	  }
	  if (flag==0)
	  {
		  to.options[iCount++]=new Option(from.options[i].text,from.options[i].value);
		  from.options[i]=null;
		  i--;iNum--;  
	  }
  }
  from.options.length=0;
}
function MoveSelectIn()
{
  this.MoveSelect(this.fPerson,this.fSelect);
}
function MoveSelectOut()
{
  this.MoveSelect(this.fSelect,this.fPerson);
}
function MoveAllIn()
{
  this.MoveAll(this.fPerson,this.fSelect);
}
function MoveAllOut()
{
  this.MoveAll(this.fSelect,this.fPerson);
}
function GetSelectValue()
{
  var i,iNum;
  var rid="",rname="",rValue="";
  iNum=this.fSelect.options.length;
  for(i=0;i<iNum;i++)
  {
    rid+=this.fSelect.options[i].value;////id没有分割符
    rname+=this.fSelect.options[i].text+",";
  }
  if(rid.length>0) rid=rid.substr(0,rid.length);
  if(rname.length>0) rname=rname.substr(0,rname.length-1);
  rValue=rid+"&"+rname;
  if(rValue.length==1) rValue="&";    
  return rValue;
}
/*使用说明：
详细的使用见htm文件例子

<Script Language=JavaScript>
  var club=new ClubInfo();//生成新的类
  //设置显示组、成员、选择成员的列表框
  //第一个参数：显示角色的下来列表框名字，第二个参数：显示角色成员的列表框，第三个参数：显示选择的成员的函数
  club.SetForm(tj.role,window.tj.person_first,window.tj.person_second);
  //填加一个角色
  //第一个参数：角色的关键字，第二个参数：角色的名字
  club.AddRole("1","zhanghua");
  //填加一个成员
  //第一个参数：成员的关键字，第二个参数：成员的名字，第三个参数：成员所属角色的关键字
  club.AddPerson("1","111111","1");
  club.AddPerson("2","11111","1");
  club.AddPerson("3","1111111","1");
  club.AddRole("2","wangyan");
  club.AddPerson("1","222222","2");
  club.AddPerson("2","22222","2");
  club.AddRole("3","liuyuan");
  club.AddRole("4","weizhenghua");
  club.AddRole("5","huhuafeng"); 
  //显示角色，把填加的角色填加到角色下拉列表中 
  club.DispRoles();  
</Script>

//把角色列表中显示角色的成员显示到成员列表中，只需要在角色列表改变事件时激发此函数即刻
//<select   name="role" onchange="JavaScript:club.DispRolesClub();">
club.DispRolesClub();

//把成员列表中显示的所有成员移到选择成员列表中（把所以选择成员列表中的成员移到成员列表）
club.MoveAllIn();club.MoveAllOut();
//移到选择的成员
club.MoveSelectOut();club.MoveSelectIn();

//得到选择成员的ID和Name字符串格式如(使用&分割)：2,5,6&zhanghua,wangyan,liuyuan
club.GetSelectValue();


//要显示动态内容只需要动态生成以上JavaScript脚本即可
*/