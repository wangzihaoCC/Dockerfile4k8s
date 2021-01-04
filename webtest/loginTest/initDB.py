from flask import Flask, redirect, url_for, request,render_template
import time
import sqlite3
import pymysql
import os

mysql_host = os.getenv("MYSQL_HOST")
mysql_port = int(os.getenv("MYSQL_PORT"))
mysql_password = os.getenv("MYSQL_ROOT_PASSWORD")

def createDB(mysql_host, mysql_port, mysql_password):
	try:
		conn = pymysql.connect(host=mysql_host, port=mysql_port, user="root", password=mysql_password, charset="utf8mb4")
		print("创建链接成功")
	except:
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
	try:
		createDB(mysql_host, mysql_port, mysql_password)
		print("成功执行创库创表")
	except:
		print("未成功执行创库创表")
		exit(1)
