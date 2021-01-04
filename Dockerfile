FROM python:3.7-alpine

LABEL author="wzh" email="wangzihao@huayun.com" purpose="nginx+uwsgi+flask+python3"

COPY ./webtest/ /webtest/

RUN pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install pysqlite3 -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install uwsgi -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && cp /webtest/sources.list /etc/apt/sources.list
