//���ƣ���Ա��ѡ��JavaScript��
//�������Ż�
//���ڣ�2002��8��8��
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
    rid+=this.fSelect.options[i].value;////idû�зָ��
    rname+=this.fSelect.options[i].text+",";
  }
  if(rid.length>0) rid=rid.substr(0,rid.length);
  if(rname.length>0) rname=rname.substr(0,rname.length-1);
  rValue=rid+"&"+rname;
  if(rValue.length==1) rValue="&";    
  return rValue;
}
/*ʹ��˵����
��ϸ��ʹ�ü�htm�ļ�����

<Script Language=JavaScript>
  var club=new ClubInfo();//�����µ���
  //������ʾ�顢��Ա��ѡ���Ա���б��
  //��һ����������ʾ��ɫ�������б�����֣��ڶ�����������ʾ��ɫ��Ա���б�򣬵�������������ʾѡ��ĳ�Ա�ĺ���
  club.SetForm(tj.role,window.tj.person_first,window.tj.person_second);
  //���һ����ɫ
  //��һ����������ɫ�Ĺؼ��֣��ڶ�����������ɫ������
  club.AddRole("1","zhanghua");
  //���һ����Ա
  //��һ����������Ա�Ĺؼ��֣��ڶ�����������Ա�����֣���������������Ա������ɫ�Ĺؼ���
  club.AddPerson("1","111111","1");
  club.AddPerson("2","11111","1");
  club.AddPerson("3","1111111","1");
  club.AddRole("2","wangyan");
  club.AddPerson("1","222222","2");
  club.AddPerson("2","22222","2");
  club.AddRole("3","liuyuan");
  club.AddRole("4","weizhenghua");
  club.AddRole("5","huhuafeng"); 
  //��ʾ��ɫ������ӵĽ�ɫ��ӵ���ɫ�����б��� 
  club.DispRoles();  
</Script>

//�ѽ�ɫ�б�����ʾ��ɫ�ĳ�Ա��ʾ����Ա�б��У�ֻ��Ҫ�ڽ�ɫ�б�ı��¼�ʱ�����˺�������
//<select   name="role" onchange="JavaScript:club.DispRolesClub();">
club.DispRolesClub();

//�ѳ�Ա�б�����ʾ�����г�Ա�Ƶ�ѡ���Ա�б��У�������ѡ���Ա�б��еĳ�Ա�Ƶ���Ա�б�
club.MoveAllIn();club.MoveAllOut();
//�Ƶ�ѡ��ĳ�Ա
club.MoveSelectOut();club.MoveSelectIn();

//�õ�ѡ���Ա��ID��Name�ַ�����ʽ��(ʹ��&�ָ�)��2,5,6&zhanghua,wangyan,liuyuan
club.GetSelectValue();


//Ҫ��ʾ��̬����ֻ��Ҫ��̬��������JavaScript�ű�����
*/