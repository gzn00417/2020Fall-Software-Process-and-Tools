<%@ page contentType="text/html;charset=GB2312"%>
<html>
<head>
<title></title>
<style type='text/css'></style>

<link href="media/style1.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!--
.style1 {
	font-family: "��������";
	font-size: x-large;
	color: #FFFFFF;
}
.style2 {
	color: #FFFFFF;
	font-family: "��������";
	font-size: medium;
	font-weight: bold;
}
.style3 {color: #FFFFFF}
.style4 {color: #FF0000}
-->
</style></head>
<body>

    <script language='JavaScript' src='menutree/menutree.js'></script>
      
  <script language="JavaScript">

addtree('-��ҳ','media/index.htm','mainFrame');
addtree('-ϵͳ����');
addtree('--��־����','log.jsp?method=io','mainFrame');
addtree('--��Դ����','resource.jsp?method=io','mainFrame');
addtree('--��ɫ����','role.jsp?method=io','mainFrame');
addtree('--��������','data.jsp?method=io','mainFrame');

addtree('-���ݹ���');
addtree('--��Ƶ','1.jsp?method=io','mainFrame');
addtree('--��Ƶ','2.jsp?method=io','mainFrame');
addtree('--ͼƬ','3.jsp?method=io','mainFrame');

addtree('-�û�����');
addtree('--�û��б�');
addtree('---��˾�ڲ�Ա��','yhlistsysmanager1.jsp?method=io','mainFrame');
addtree('---�������û�','yhlistinternet.jsp?method=io','mainFrame');
addtree('--����û�');
addtree('---��˾�ڲ�Ա��','addyhsysmanager.jsp?method=io','mainFrame');
addtree('---�������û�','addyhinternet.jsp?method=io','mainFrame');
addtree('--�û����');
addtree('---��˾�ڲ�Ա��','yhchecksysmanager.jsp?method=io','mainFrame');
addtree('---�������û�','yhcheckinternet.jsp?method=io','mainFrame');
addtree('--�޸��û�');
addtree('---��˾�ڲ�Ա��','modifysysmanager.jsp?method=io','mainFrame');
addtree('---�������û�','modifyinternet.jsp?method=io','mainFrame');

addtree('-ͳ�ƹ���');
addtree('--��Ƶ','1.jsp?method=io','mainFrame');
addtree('--��Ƶ','2.jsp?method=io','mainFrame');
addtree('--ͼƬ','3.jsp?method=io','mainFrame');

addtree('-��������','help.jsp?method=io','mainFrame');

createtree();
    </script>
</p>
</body>
</html>
