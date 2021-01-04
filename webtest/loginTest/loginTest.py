from flask import Flask, redirect, url_for, request,render_template
import time
import sqlite3
import pymysql
import os
app = Flask(__name__)

mysql_host = os.getenv("MYSQL_HOST")
mysql_port = int(os.getenv("MYSQL_PORT"))
mysql_password = os.getenv("MYSQL_ROOT_PASSWORD")

# mysql_host = "172.17.0.6"
# mysql_port = 3306
# mysql_password = "123456Xx"

@app.route('/',methods= ['POST','GET'])
def login():
	return render_template("login.html")


# @app.route('/login',methods= ['POST','GET'])
# def login():
# 	return render_template("login.html")


@app.route('/loginCheck',methods= ['POST','GET'])
def loginCheck():
	if request.method == 'POST':

		# try:
		re_user = request.form['nm']
		re_pw = request.form['pw']
		re_user_ip = request.remote_addr
		re_localtime = time.asctime( time.localtime(time.time()) )
		msg = {"user":re_user,"password":re_pw,"ip":re_user_ip,'time':re_localtime}


		writedb(re_user,re_pw,re_user_ip,re_localtime)

		# conn = sqlite3.connect('loginTest.db')
		# # print("Opened database successfully")
		# c = conn.cursor()
		# c.execute("INSERT INTO loginHistory (name,password,uip,logintime) VALUES (?,?,?,?)",(user,pw,user_ip,localtime) )
		# conn.commit()
		# conn.close()

		return render_template("list.html",result = msg)

@app.route('/list')
def list():
	conn = pymysql.Connect(host=mysql_host, port=mysql_port, user="root",password=mysql_password, database="loginHistory", charset="utf8mb4")
	#conn = sqlite3.connect('loginTest.db')
	cursor = conn.cursor()
	cursor.execute("select * from loginHistory")
	rows = cursor.fetchall()
	conn.close()
	# for row in rows:
	# 	print(row)
	return render_template("list2.html",rows = rows)


def writedb(re_user,re_pw,re_user_ip,re_localtime):
	conn = pymysql.Connect(host=mysql_host, port=mysql_port, user="root", password=mysql_password, database="loginHistory", charset="utf8mb4")
	cursor = conn.cursor()
	sql = "INSERT INTO loginHistory(u_name,u_password,u_ip,u_logintime) \
		VALUES ('%s', '%s', '%s', '%s')" % \
		(re_user,re_pw,re_user_ip,re_localtime)

	try:
		cursor.execute(sql)
		conn.commit()
		print("insert ok")
	except:
		conn.rollback()
		print("sql error")
	finally:
		conn.close()

def createDB(mysql_host, mysql_port, mysql_password):
	try:
		conn = pymysql.connect(host=mysql_host, port=mysql_port, user="root", password=mysql_password, charset="utf8mb4")
	except Exception:
		print("创建链接失败")
	cursor = conn.cursor()
	sql_1 = "CREATE DATABASE IF NOT EXISTS loginHistory" 
	cursor.execute(sql_1)
	conn.commit()
	sql_2 = "USE loginHistory"
	cursor.execute(sql_2)
	conn.commit()
	sql_3 = "CREATE TABLE IF NOT EXISTS `loginHistory` (`u_name` varchar(200) not null,`u_password` varchar(200) not null,`u_ip` varchar(200),`u_logintime` varchar(200))"
	cursor.execute(sql_3)
	conn.commit()
	conn.close()


if __name__ == '__main__':
	app.run()
	app.run(debug = True)
