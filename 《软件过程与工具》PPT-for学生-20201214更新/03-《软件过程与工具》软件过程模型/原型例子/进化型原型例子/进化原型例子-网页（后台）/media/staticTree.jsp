<%@ page contentType="text/html;charset=GB2312"%>
<html>
<head>
<title></title>
<style type='text/css'></style>

<link href="media/style1.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!--
.style1 {
	font-family: "华文宋体";
	font-size: x-large;
	color: #FFFFFF;
}
.style2 {
	color: #FFFFFF;
	font-family: "华文宋体";
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

addtree('-主页','media/index.htm','mainFrame');
addtree('-系统管理');
addtree('--日志管理','log.jsp?method=io','mainFrame');
addtree('--资源配置','resource.jsp?method=io','mainFrame');
addtree('--角色配置','role.jsp?method=io','mainFrame');
addtree('--数据配置','data.jsp?method=io','mainFrame');

addtree('-数据管理');
addtree('--音频','1.jsp?method=io','mainFrame');
addtree('--视频','2.jsp?method=io','mainFrame');
addtree('--图片','3.jsp?method=io','mainFrame');

addtree('-用户管理');
addtree('--用户列表');
addtree('---公司内部员工','yhlistsysmanager1.jsp?method=io','mainFrame');
addtree('---互联网用户','yhlistinternet.jsp?method=io','mainFrame');
addtree('--添加用户');
addtree('---公司内部员工','addyhsysmanager.jsp?method=io','mainFrame');
addtree('---互联网用户','addyhinternet.jsp?method=io','mainFrame');
addtree('--用户审核');
addtree('---公司内部员工','yhchecksysmanager.jsp?method=io','mainFrame');
addtree('---互联网用户','yhcheckinternet.jsp?method=io','mainFrame');
addtree('--修改用户');
addtree('---公司内部员工','modifysysmanager.jsp?method=io','mainFrame');
addtree('---互联网用户','modifyinternet.jsp?method=io','mainFrame');

addtree('-统计管理');
addtree('--音频','1.jsp?method=io','mainFrame');
addtree('--视频','2.jsp?method=io','mainFrame');
addtree('--图片','3.jsp?method=io','mainFrame');

addtree('-帮助管理','help.jsp?method=io','mainFrame');

createtree();
    </script>
</p>
</body>
</html>
