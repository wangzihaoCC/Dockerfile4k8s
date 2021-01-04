FROM python:3.7-alpine

LABEL author="wzh" email="wangzihao@huayun.com" purpose="nginx+uwsgi+flask+python3"

COPY ./webtest/ /webtest/
