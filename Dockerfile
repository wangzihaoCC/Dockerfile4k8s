FROM python:3.7-alpine

LABEL author="wzh" email="wangzihao@huayun.com" purpose="nginx+uwsgi+flask+python3"

COPY ./webtest/ /webtest/

RUN pip install --upgrade pip -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install flask -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install pysqlite3 -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && pip install uwsgi -i https://pypi.tuna.tsinghua.edu.cn/simple \
    && cp /webtest/sources.list /etc/apt/sources.list \
    && apt-get update \
    && apt-get install -y --force-yes nginx \
    && cp /webtest/nginx.conf /etc/nginx/nginx.conf \ 
    && chmod +x /webtest/commands.sh

ENTRYPOINT ["/webtest/commands.sh"]
